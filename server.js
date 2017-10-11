const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3001;

hbs.registerPartials(__dirname + '/partials');

var app = express();
app.use(express.static(__dirname + '/partials'));
app.use(express.static(__dirname + '/views/css'));

app.get('/',(req,res)=>{
    res.render('mainpage.hbs');
});

app.get('/about',(req,res)=>{
    res.render('aboutpage.hbs');
});

app.get('/contact',(req,res)=>{
    res.render('contactpage.hbs');
});


app.listen(port,()=>{
    console.log('server is running');
})