// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios').default;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req:Request , res: Response):void => {
    fs.readFile('./views/test.json' , 'utf-8' , (err,data)=> {
        if(err){
            throw err
        }
        res.send(JSON.parse(data))

    })

})


app.get("/headers" , (req: Request, res: Response):void => {
    fs.readFile('./views/headers.json' , 'utf-8' , (err,data)=> {
        if(err){
            throw err
        }

         res.send(JSON.parse(data))
    })
})



  app.listen(PORT, ():void => {
    console.log(`Server Running here ⚡  https://localhost:${PORT}`);
  });