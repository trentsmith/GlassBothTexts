const express = require('express');
const alasql = require('alasql');
alasql("CREATE TABLE updb (u STRING, p STRING, pay INT, d date)");

//https://expressjs.com/en/resources/middleware/cors.html
const app = express();
db =[];
const axios = require('axios')
axios.post('/todos', {
  todo: 'Buy the milk'
})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})
app.get('/', (req, res) => {
 alasql("INSERT INTO updb VALUES ('u','p',1,getDate())");
 res.send("test")
  
});
app.get('/getAllusers', (req, res) => {

a= alasql("select * from updb");

 res.send(a)
  
});
app.get('/user/:u/:p', (req, res) => {
 users= alasql("select Unique * from updb where u = '"+req.params.u+"' AND p ='"+req.params.p+"'");
 res.send(users); 
});

app.get('/insert/user/:u/:p', (req, res) => {

 alasql("INSERT INTO updb VALUES ('"+req.params.u+"','"+req.params.p+"',"+"1,getDate()"+")");
res.send("success")

  
});
app.listen(3000, () => {
  console.log('server started');
});