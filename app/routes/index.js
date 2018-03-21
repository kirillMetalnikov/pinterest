var CardHundler = require ('../controllers/cards')
var path = process.cwd()

const needLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.json({type: 'login', message: 'You need login'})
  }
}

module.exports = (app, passport) => {
  var cardHundler = new CardHundler()

  app.route('/')
    .get((req, res) => {
      res.sendFile(path + '/client/public/index.html')
    })

  app.route('/auth/github/')
    .get(passport.authenticate('github'))
  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/my cards',
			failureRedirect: '/failure'
    }))

  app.route('/auth/google/')
    .get(passport.authenticate('google', { scope: ['profile'] }))
  app.route('/auth/google/callback')
    .get(passport.authenticate('google', {
      successRedirect: '/my cards',
			failureRedirect: '/failure'
    }))

  app.route('/logout')
	.get(function (req, res) {
		req.logout();
		res.redirect('/');
	});

  app.route('/api/cards')
    .get(cardHundler.getCards)
    .post(needLogin, cardHundler.addCard)
}
