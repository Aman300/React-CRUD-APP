const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const route = require('./router/route');
const app = express();
const cors = require("cors");
const logger = require("morgan");
const path = require('path');

app.use(logger("dev"));
app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb+srv://saurabh042160:iafSq7ML1zCfugKI@cluster1.ymdh1.mongodb.net/database123321",
    { useNewUrlParser: true })
.then(() =>{
    console.log("Database is connected")
})
.catch(()=>{
    console.log('db not connect please check connection')
})



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//app.use('/', route)

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });


app.listen(process.env.Port || 4000, ()=>{
    console.log("Server is running on this port", process.env.port || 4000)
})