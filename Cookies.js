const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

var app = express()
//app.use(cookieParser())
app.use(session({
  secret: 'verygoodsecret',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}))



app.get('/setname', (req, res)=>{
   const cookie = req.cookies.name;
   res.send(`Hey there, ${cookie}`);

}) 

app.get('/', function (req, res) {
  const {username = 'Anonymous'} = req.query
  res.send(`Welcome, ${username}`);

})

app.listen(8080, ()=>{
  console.log('listeming on port 8080')
})