// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var bodyparser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 3000;
import { request } from 'graphql-request';


app.use(express.json());

// main routes
const query = `
  query{
    Quotes

    Quotes1{
      title1
    }
  }
`
const quotes = request('http://localhost:3000/graphql' , query)
.catch(console.error)

app.get ("/", async (req:Request, res:Response) => {
    res.send("Hello Typescript with Node.js! __ api :)")
    res.send(await quotes)
    

  });


  function defineSchema(){
    var schema = buildSchema(`
    type mainQuery {
      Quotes: [String!]
      Author: [String!]!     
      Quotes1: [Authornames!]
      Quotes2: [quoting2!]
      Quotes3: [quoting3!]
      getAuthors: [getQuotesAuthor]
  
    }


    type getQuotesAuthor{
      Authors: String,

    }

    type getSource{
      sourceName: String
    }



    
    type Authornames{
      title1: String
 }
    type quoting2 {
      title2: String
    }

    type quoting3 {
      title3 : String
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
    mainQuery:( getsource(), getQuote()),
    Author: getsource(),
    Quotes: getQuote(),
    Quotes1: getname(),
    Quotes2: getQuotes2(),
    Quotes3: getQuotes3(),
    getAuthors: getQuoteing(),
  },
  graphiql: false

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
// fetching id from the api endpoint


// setting up ports
// void is used here as thr is no type for the port to listen to.
  app.listen(PORT, ():void => {
    console.log(`Server Running here ⚡  https://localhost:${PORT}`);
  });


// api quote fr the main page

function getQuote(){
  return [


    "Except our own thoughts, there is nothing absolutely in our power. ",
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

function getname(){
  return[
   {title1: 'Except our own thoughts, there is nothing absolutely in our power ~ René Descartes'}  ,
 
  ]
}


function getQuotes2(){
  return[
    {title2:'Parents wonder why the streams are bitter, when they themselves poison the fountain ~Jhon Locke'},

  ]
}

function getQuotes3(){
  return[
    {title3: 'I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self. ~Aristole'}
  ]
}

function getQuoteing(){
  return[
    {Authors:'René Descartes'},
    {Authors: 'Jhon locke'},
    {Authors: 'Aristotle'}
  ]
}

