const express = require('express');
const connectDB = require('./config/db');
const schema = require('./schema/schema');
var { ruruHTML } = require("ruru/server");
const cors = require('cors');
var { createHandler } = require("graphql-http/lib/use/express")
require('dotenv').config(); // Load environment variables
const PORT = 5000;


// Connect Database
connectDB();

const app = express();

app.use(cors());
 
// Serve the GraphiQL IDE.

app.get("/api", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.all('/graphql', createHandler({
    schema
})
)


app.listen(PORT,console.log(`Server is running on port ${PORT}`)); 