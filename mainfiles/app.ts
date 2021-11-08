import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 3000;
const  bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
import * as fs from 'fs';


app.use("/",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));