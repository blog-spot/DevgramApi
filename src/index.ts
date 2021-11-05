// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3000;
const url = 'http://localhost:3000/api/v1/mainQuotes'
const fetch = require('node-fetch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.get ("/",  (req:Request, res:Response) => {
    res.send("Hello Typescript with Node.js! __ api :)")
    

});
app.get("/api/v1/main", (req:Request , res: Response):void => {
  fs.readFile('./api/test.json' , 'utf8' , (err , data ) => {
    if(err){
      throw err;
    }
    res.send(JSON.parse(data));
  })

})


app.get("/api/v1/mainQuotes", (req:Request , res: Response):void => {
  fs.readFile('./api/mainQuotes.json' , 'utf8' , (err , data ) => {
    if(err){
      throw err;
    }
    res.send(JSON.parse(data));
  })

})



// the pilosopy api is available
// fetching id from the api endpoint


// setting up ports
// void is used here as thr is no type for the port to listen to.
  app.listen(PORT, ():void => {
    console.log(`Server Running here ⚡  https://localhost:${PORT}`);
  })
