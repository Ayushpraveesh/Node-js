const express = require('express')
const app = express()
 

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home',function(req,res){
  res.send('haii')
})
app.use(auth)
app.get('/login',function(req,res){
    res.send('click to login')
})
app.post('/curb',function(req,res){
   res.json({
    name:"ayush",
    age:22
   })
})

 function auth(req,res,next){
  if(usernmae='admin'){
     
    console.log('middleware');
    next();
  }
  }
           
app.listen(4000)