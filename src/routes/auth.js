const express = require('express');
const bodyParser = require('body-parser')
const path = require("path");
const fs = require("fs");

let router = express.Router();

router.get('/',(req,res)=>{
    if (req.cookies?.username == undefined && req.cookies?.password == undefined) {
        console.log('authorization')
        res.render(path.join(__appdir,"views","auth.hbs"));
    }
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))
router.post('/',(req,res)=>{
    let users = fs.readFileSync('bd/users.json');
    users = JSON.parse(users)

    if (users[req.body.username] !== undefined) {

    } else {
        res.send('/auth/1')
    }
    console.log()
    
    res.json(req.body)
    console.log(req.body)
    console.log(__appdir)
})

module.exports = router;
