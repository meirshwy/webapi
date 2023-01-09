const mysql=require('mysql');
const connection=mysql.createConnection(
{
    host:'localhost',
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    database:process.env.ecommerce
});

const express = require('express');
const app = express();

const ProductRouter = require('./api/v1/routes/product');
const userRouter = require('./api/v1/routes/user');

const morgan = require('morgan');
const auth = require('./api/v1/middlewares/auth')
const cors = require('cors');


connection.connect(function(arr){
    if(arr)
    console.log(arr.message);
    else
    console.log('connected DB');
});
let sql = "select * from t_product";
connection.query(sql,function(arr,rows,fiels){
    if(arr)
    console.log(arr.message);
    else
    console.log(rows);
});

app.use(morgan('dev'));
app.use(cors({origin:'https://www.zap.co.il'}));//ברמה של כל האתר
app.use(cors({origin:'/product,https://www.zap.co.il'}));//רק רמה מסוימת
app.use(express.urlencoded({extended:true}));

app.use("/product",ProductRouter);
app.use("/user",userRouter);

app.use(auth);

//נתיב למוצר לא קיים
app.all("*",(req,res)=>{
    return res.status(404).json({msg:"404 Not Found"});
})
module.exports = app;