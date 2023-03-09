global.__appdir = __dirname;
const express = require("express");
const router = require('./src/routes/router');


const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use('/', router);
app.use((req,res)=>{
    res.send('404')
})


app.listen(port);






// app.set("view engine", "hbs");

// app.use(cookieParser('3wtK9NC56ysEhQVJCmd44QFBdzbLa7maX5kXJzsTtPDuGuHB'));




/*
app.use("/autho", (req,res,next)=>{
    res.send("главная страница!");
    next();

    // res.send("главная страница!");
    
    // console.log('connect')
    // res.send("good!");
});
*/
/*
app.use("/", (req,res,next)=>{
    // let users = fs.readFileSync('bd/users.json');
    // console.log(JSON.parse(users))
    console.log('123');
    // res.render("authorization.hbs");
    // console.log('connect')
    res.render("authorization.hbs");
    // console.log('Cookie: ', req.cookies)
    next();
});
*/
/*
app.get("/", (req,res)=>{
    console.log("send");
    
});
*/