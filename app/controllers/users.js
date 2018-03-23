var User = require('../models/user')

module.exports = function CardHundler() {

  this.current = (req, res) => {
    var {_id} = req.user
    User.findById(_id)
    .exec()
    .then( user => {
      // mongoose object is some other than we see in toString()
      //without toObject() method we can't add ownerName
      user = user.toObject()

      var name =
        user.google
          ? user.google.displayName
          : user.github.displayName || user.github.username
      res.json({...user, name})
    })
    .catch(err => console.log(err))
  }


}
