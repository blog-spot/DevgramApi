// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3000;
const axios = require('axios');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// ejs setup
app.set('view engine', 'ejs');


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

app.get('/quotes', (req: Request, res: Response) => {
    const data = fs.readFileSync('./views/topfive.json').toString();
    return res.json(JSON.parse(data))  
})

// test pull test from api server

// async function httpRequest(){
//     try {
//       const URL = "https://devgramapi.herokuapp.com/headers"
//       const response = await axios.get(URL);
//     //   console.log(response);
//     console.log(response)
//       const source = response.data.id
//       console.log(source);

//     } catch (error) {
//       console.error(error);
//     }
//   }
//   httpRequest();

  async function quotesFetch(){
      try{
          const URL ="https://devgramapi.herokuapp.com/quotes"
          const response = await axios.get(URL);
          console.log(response.data[2].source2);
      }catch(error){
          console.log(error);
      }
  }

  quotesFetch();
// testing api deatiles

app.get('/testing' ,(req: Request, res: Response):void => {
    res.render('hello/hello')

})

  app.listen(PORT, ():void => {
    console.log(`Server Running here ⚡  https://localhost:${PORT}`);
  });