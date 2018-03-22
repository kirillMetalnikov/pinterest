var User = require('../models/user')

module.exports = function CardHundler() {

  this.current = (req, res) => {
    var {_id} = req.user
    User.findById(_id)
    .exec()
    .then( user => {
      var name =
        user.google
          ? user.google.displayName
          : user.github.displayName || user.github.username
      res.json({_id, name})
    })
    .catch(err => console.log(err))
  }


}
