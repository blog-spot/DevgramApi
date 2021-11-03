// setting up express
import express, {Request,Response,Application} from 'express';
import * as fs from 'fs';
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


// building test buildSchema

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    Source: [Post],
    Philosophy: String,
    quote: String,
  }
`);

var source = `test`

// The root provides a resolver function for each API endpoint
var root = {
  quote: () => {
    return schema;
  },
};

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
