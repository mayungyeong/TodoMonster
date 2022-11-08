const express = require("express");
const router = express.Router();
const database = require("../database");

router.post("/signup", (req, res) => {
    database.query(
        "INSERT INTO user(user_id, password) values (?, ?)", [req.body.email, req.body.password],
    function(err, data){
        if(err){
            console.log(err);
            console.log("회원가입 실패")
        } else{
            res.send({success : 1});
            console.log("회원가입 성공")
        }
    });
});

module.exports = router;