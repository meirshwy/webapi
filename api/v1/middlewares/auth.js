module.exports = (req,res,next)=>{

console.log("hi middleware");
next();

}