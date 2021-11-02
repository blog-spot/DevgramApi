// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// main routes
app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });


app.get("/api", (req:Request , res: Response):void => {
  fs.readFile('C:\\DevgramApi\\views\\test.json' , 'utf8' , (err , data ) => {
    if(err){
      throw err;
    }
    res.send(JSON.parse(data));
  })


})
// setting up ports
// void is used here as thr is no type for the port to listen to.
  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
  });
