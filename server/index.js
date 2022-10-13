const express = require('express');
const cors  = require('cors');
const mongoose = require('mongoose');



const app = express();
require('dotenv').config();

// call middleware
app.use(cors());
app.use(express.json());

// connect to DB
mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser:true,
   useUnifiedTopology:true,
}).then(()=> {
    console.log("DB Connection Successfully");
}).catch((err)=> {
    console.log(err.message);
});


// start server
const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on ${process.env.PORT}`);
});

