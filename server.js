var express= require("express")
var app=express()

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extends:false}));

const addTwoNums = (num1, num2) => {
   var number1=parseInt(num1);
   var number2=parseInt(num2);
   var result= number1+number2;
   return result;
    }
    app.get("/addTwoNumbers",(req,res) =>{​

        var num1 = req.query.num1;​
        var num2 = req.query.num2; ​
        var res = addNumbers(num1, num2);​
        res.json({statusCode: 200, data: result, message:"Success"})​
        
    })

var port=process.env.port||3000;

app.listen(port,()=>{
    console.log("listening to"+port)
})