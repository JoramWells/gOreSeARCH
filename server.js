const express = require('express')
const {json,urlencoded} = require('body-parser')
const exhbs = require('express-handlebars')
const path = require('path')

const app = express()

// View  engine
app.engine('handlebars',exhbs({defaultLayout:false}))
app.set('view engine','handlebars')

// Body parser
app.use(urlencoded({extended:false}))
app.set(json())

// Static folder
app.use('/public',express.static(path.join(__dirname, 'public')))


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log("Server started...")
})