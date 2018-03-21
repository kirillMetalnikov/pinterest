var express = require('express')
var fallback = require('express-history-api-fallback')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var passport = require('passport')
var session = require('express-session')

var app = express()
var path = process.cwd()

mongoose.connect(process.env.MONGO_URI)

require('./app/config/passport')(passport)

app.use('/client', express.static(path + '/client'))
app.use('/public', express.static(path + '/client/public'))
app.use(bodyParser.json())
app.use(session({
	secret: process.env.SESSION_KEY,
	resave: false,
	saveUninitialized: true,
	maxAge: 60000,
	expires: 60000
}));
app.use(passport.initialize())
app.use(passport.session())

require('./app/routes/index.js')(app, passport)

app.use(fallback(process.cwd() + '/client/public/index.html'))

var port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Node.js is listening on port ${port}`)
})
