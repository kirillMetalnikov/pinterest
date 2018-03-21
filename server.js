var express = require('express')
var fallback = require('express-history-api-fallback')
var bodyParser = require('body-parser')

var app = express()
var path = process.cwd()

//  start temp
var id = 6
var cards = require('./tempData')
//  end temp


app.use('/client', express.static(path + '/client'))
app.use('/public', express.static(path + '/client/public'))
app.use(bodyParser.json())

app.route('/')
  .get((req, res) => {
    res.sendFile(path + '/client/public/index.html')
  })

app.route('/api/cards')
  .get( (req, res) => {
    res.json({cards})
  })
  .post( (req, res) => {
    var {card} = req.body

    id++
    card.id = id
    card.user = 'test'
    card.likes = 0


    cards.push(card)
    res.json({card})
  })


app.use(fallback(process.cwd() + '/client/public/index.html'))

var port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Node.js is listening on port ${port}`)
})
