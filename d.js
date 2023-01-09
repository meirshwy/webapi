const jwt=require('jsonwebtoken');
const
token=jwt.sign({Uid:23,Email:"ylapidot@gmail.com"},"myprivatekey",{expiresIn:'1h'});
console.log(token);
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJFbWFpbCI6InlsYXBpZG90QGdtYWlsLmNvbSIsImlhdCI6MTY3MjY5MTQ3NiwiZXhwIjoxNjcyNjk1MDc2fQ.IVnlXPAWQ4Q_Y7Oa6qITi6HFps9t-r6aE4fAHVBK9aM";