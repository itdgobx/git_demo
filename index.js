const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('hello world')
})

app.get('/about', function(req,res){
    res.send('About Us')
})
app.listen(8080, ()=>{
    console.log('Listening at port 8080.')
})