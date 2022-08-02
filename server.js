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
    //REST - GET (using query param)
    app.get("/addTwoNumbers",(req,res)=>{
        var num1=req.query.num1;
        var num2=req.query.num2;
        var result= addTwoNums(num1,num2);
        
        res.json({statusCode:200,data:result,message:"Success"})
       if(res.statusCode==404){
        res.send('error');
       }
       // res.send(`Sum of two numbers is ${result}`);
    })

    //REST - POST (using body param)
    const subTwoNums = (num3, num4) => {
        var number1=parseInt(num3);
        var number2=parseInt(num4);
        var result= number1-number2;
        return result;
         }
         
         app.post("/subTwoNumbers",(req,res)=>{
             var num3=req.body.num3;
             var num4=req.body.num4;
             var result= subTwoNums(num3,num4);
             
             res.json({statusCode:200,data:result,message:"Success"})
            
            
         })
       
   
  

var port=process.env.port||3000;

app.listen(port,()=>{
    console.log("listening to"+port)
})