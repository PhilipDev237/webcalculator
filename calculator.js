const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1  = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var addResult = addition(num1, num2);

    res.send("The sum is: " + addResult);
});

// get BMI route
app.get("/bmicalculator", function (req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

// post BMI route
app.post("/bmicalculator", function(req, res){
    var weight  = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmiResult = calcBMI(weight, height);

    res.send("Your BMI is: " + bmiResult);
});

app.listen(3000, function(){
    console.log("server listening on port 3000...");
});

function addition(num1, num2){
    return num1 + num2;
}

function calcBMI(weight, height){
    return weight / (height * height);
}