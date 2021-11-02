// setting up express
import express, {Request,Response,Application} from 'express';

const app:Application = express();
const PORT = process.env.PORT || 3000;


// main routes
app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });

// setting up ports
  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
  });
