import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
const app:Application = express();
app.use(express.json());

app.get("/api", (req:Request , res: Response):void => {
    fs.readFile('./views/test.json' , 'utf8' , (err , data ) => {
      if(err){
        throw err;
      }
      res.send(JSON.parse(data));
    })

    
app.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));