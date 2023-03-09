const express = require('express'),
      path = require("path"),
      auth = require('./auth'),
      level = require('./level'),
      router = express.Router();
    router
        .use('/public',express.static(path.join(__appdir,"/public")))
        .use('/', auth)
        .use('/auth', auth)
        .use('/level', level)
        .use((req,res)=>{
            res.redirect('/')
        })

module.exports = router;