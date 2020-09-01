const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// For Calculator addition
app.get("/",function(req,res){
  //console.log("__dirname");
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
var num1  = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;
res.send("Calculated Value is : " + result);
});

//For BMI
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight / (height * height);
res.send("Calculated BMI is : " + result);
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
