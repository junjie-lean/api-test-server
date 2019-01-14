const express = require('express');
const app = express();
const apiStatistic = require('./mid-api-statistic');
const bodyParser = require('body-parser');
let cwd = process.cwd();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiStatistic);

app.get("/", (req, res) => {
    res.send('<h3>hello world</h3>')
});


app.post("*", (req, res,next) => {
    console.log('----------------------------------------------------')
    console.log('new request coming:')
    console.log("pathname:",req.pathname)
    console.log("path:",req.path)
    console.log("query:",req.query)
    console.log("body:",req.body)
    console.log("baseUrl:",req.baseUrl)
    console.log("ip:",req.ip)
    console.log('----------------------------------------------------')
    next()
});

app.post('/api/a', (req, res) => {
    res.json({
        result: true,
        pid: process.pid,
        cwd: cwd
    })
});

app.post('/api/b', (req, res) => {
    res.json({
        result: true,
        pid: process.pid,
        cwd: cwd
    })
});

app.post('/api',(req,res)=>{
    res.end()
})



app.listen(8080, (err) => {
    err ? console.log(err) : console.log('server star up')
});