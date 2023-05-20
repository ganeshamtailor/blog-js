let express = require('express')
const mongoose = require('mongoose')
const app = express();
const router = require("./app/routes")
const bodyParser = require('body-parser');
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/blog-dev').then(() =>console.log('connected to blog-dev!')).catch((err) => console.log(err));

router(app)

app.listen('3300', ()=>{
    console.log('listen at 3300')
})