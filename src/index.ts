// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var bodyparser = require('body-parser');
// using node fetch
import fetch from 'node-fetch';
const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// main routes
app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });
  function defineSchema(){
    var schema = buildSchema(`
    type mainQuery {
    
      Quote: [String!]! 
      Author: [String!]! 
     
  
    }

    type Mainmutation {
      recordBook(title: String): String
    }

   
  
    schema{
      query: mainQuery
      mutation: Mainmutation
    }
    `);
  
    return schema;
  
  }





app.use("/graphql" ,graphqlHTTP({
  // Specifiing all the options here.
  schema:defineSchema(),
  rootValue: {
    Author: getsource(),
    Quote: getQuote()
  },
  graphiql: true

})
);


// app.use('/test' , graphqlHTTP({
//   schema:secondSchema(),
//   rootValue: {
//     author: getsource()
//   },
//   graphiql: true

// })
// )


// the pilosopy api is available

app.get('/api-graphql' , (req:Request, res:Response) => {
  fetch('')
})



// setting up ports
// void is used here as thr is no type for the port to listen to.
  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
  });


// api quote fr the main page

function getQuote(){
  return [


    "Except our own thoughts, there is nothing absolutely in our power.",
    "Parents wonder why the streams are bitter, when they themselves poison the fountain.",
    "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self."

  ];
}

function getsource(){
  return [
    'René Descartes',
    'John Locke',
    'Aristotle',
  ]
}