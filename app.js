//mongoDB pw: BbjWFCesQOOcY2Ba
//mongoDB connection:mongodb+srv://benoketch2:<password>@cluster0.0nlmrfw.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require("mongoose");
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')
 
const app = express();


mongoose.connect('mongodb+srv://benoketch2:BbjWFCesQOOcY2Ba@cluster0.0nlmrfw.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Successfully connected to mongoDB ATLAS!")
    })
    .catch((err) => {
        console.log("Unable to connect to mongoDB ATLAS!")
        console.error(err)
    });


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use("/api/stuff", stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;