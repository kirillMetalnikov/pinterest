var Card = require('../models/card')

module.exports = function CardHundler() {

  this.getAll = (req, res) => {
    Card
      .find()
      .exec()
      .then(cards => res.json({cards}))
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
