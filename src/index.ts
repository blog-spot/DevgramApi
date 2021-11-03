// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// building test buildSchema

var schema = buildSchema(`
  type Query {
    hello: String
  },
  type Query{
    test: fastify
  }
 
`);
var root = { hello: () => 'Hello world!' };


const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// main routes
app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });


  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));

// setting up ports
// void is used here as thr is no type for the port to listen to.
  app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
  });
