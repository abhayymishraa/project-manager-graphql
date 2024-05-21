

const express = require('express');
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")

const schema = require('./schema/schema');
const connectDB = require('./config/db');

const app = express();
require('dotenv').config(); // Load environment variables
const PORT = process.env.PORT  || 3000;


//connect to database
connectDB();
 
// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.all('/graphql', createHandler({
    schema
})
)


app.listen(PORT,console.log(`Server is running on port ${PORT}`)); 