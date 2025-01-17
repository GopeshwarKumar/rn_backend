const express = require('express');
const path=require("path");
const cors=require("cors");
const model=require("./Models/RadioNitrozModels");


const app = express();

// const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post("/formdata",async (req, res) => {
  const data = new model(req.body);
  await data.save();
  res.send("Success Bhai")
});


// Start the server
app.listen(5000, () => {
  console.log('Rn Server is running');
});

// nodemon start RadioNitroz.js