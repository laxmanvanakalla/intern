const express = require('express');
var app = express();
app.use(express.static(__dirname));
app.get('/user',(req,res)=>{

  var key=req.query.nam;

  const ser = require(__dirname+'/index1.js');
  var fin= ser(key);

  setTimeout(()=>{
    console.log(fin);
    var text='<h2>The top five repositories of'+key+' are ';
    var text2=fin.topFive.map((rep)=>{return '<h3>'+rep.name+'<h3>'+' '});

    res.send('<h1>welcome to explore ' + key+'!!'+text+text2);
  },30000);
});
app.post('/user',(req,res)=>{
  res.send(req.data);
});
app.listen(3000);
