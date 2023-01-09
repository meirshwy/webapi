
//תורת הצפנת סיסמאות
const bcrypt=require('bcrypt');
const pass="abc1234";
const saltRounds=10;
ashFromDb="$2b$10$aGT/1HhHsncvc2XIEWfLkeN2L1W9z3DBeEBSFCTsfgGLzTP/Z9doe";


// //פונקציית הצפנה
// bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
// if(err)
// console.log(err.message);
// else
// console.log(hashPass);
// });

//פונקציית השוואה
bcrypt.compare(pass,ashFromDb,(err,status)=>{
    if(err)
    console.log(err.message);
    else
    console.log(status);
    });