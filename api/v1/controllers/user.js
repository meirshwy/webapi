const { connect } = require("../routes/product");
const {bcrypt} = require("bcrypt");
const {jwt} = require("jwt");

module.exports = {



register:(req,res)=>{
       const {user,pass,fullname}=req.body;

       bcrypt.hash(pass,10).then((hashpass)=>{
        let sql = `insert into t_user (user,pass,fullname)valuse ('${user}','${hashpass}','${fullname}');`;
        Connection.query(sql,(arr,rows,fileds)=>{
                if(arr)
                {
                        return res.status(500).json(arr)
                }
                else
                {
                        let uid=rows.insertid;
                        let token = jwt.sign({uid:uid},process.env.PRIVATE_KEY);
                        return res.status(200).json(uid,token);
                };
        })
       }).catch((arr)=>{
        return res.status(500).json(arr);
       });
},

login:(req,res)=>{
        return res.status(200).json({msg:req.body});
}}
