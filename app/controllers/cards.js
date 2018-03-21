var Card = require('../models/card')

module.exports = function CardHundler() {
  
  this.getCards = (req, res) => {
    Card
      .find()
      .exec()
      .then(cards => res.json({cards}))
      .catch(err => console.log(err))
  }

  this.addCard = (req, res) => {
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
}
