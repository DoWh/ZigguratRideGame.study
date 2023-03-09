const express = require('express');

let router = express.Router();

router.get('/',(req,res)=>{
    console.log('level')
    res.send('level')
});

module.exports = router;
