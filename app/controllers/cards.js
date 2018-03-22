var Card = require('../models/card')
var User = require('../models/user')

module.exports = function CardHundler() {

  this.getAll = (req, res) => {
    Promise.all([
      Card.find().exec(),
      User.find().exec()
    ])
      .then(([cards, users]) => {
        cards = cards.map( card => {
          var _id = card.ownerID
          var user = users.filter( user => {
            return user._id == _id
          })[0]

          var ownerName =
            user.google.displayName || user.github.displayName || user.github.username

          // mongoose object is some other than we see in toString()
          //without toObject() method we can't add ownerName
          var newCard = card.toObject()

          newCard.ownerName = ownerName
          return newCard
        })
        res.json({cards})
      })
      .catch(err => console.log(err))
  }

  this.add = (req, res) => {
    var {src, type, description} = req.body.card
    var newCard = new Card({
      ownerID: req.user._id,
      likes: 0,
      src,
      type,
      description
    })

    newCard
      .save()
      .then(card => res.json({card}))
      .catch(err => console.log(err))
  }

  this.delete = (req, res) => {
    var {_id }= req.params
    Card
      .findByIdAndRemove(_id)
      .exec()
      .then(card => res.json({_id: card._id}))
      .catch(err => console.log(err))
  }

  this.like = (req, res) => {
    var {_id }= req.params
    Card
      .findByIdAndUpdate(_id, {$inc: {likes: 1}}, {new: true})
      .exec()
      .then(card => res.json({card}))
      .catch(err => console.log(err))
  }
}
