const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');


dotenv.config(); /// using dotenv for hiding secret keys
const app = express();
app.use(express.json());

///For API call from Front End

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});


///MongoDB Cloud Connection


mongoose.connect(process.env.MONGO_URL, {

    useUnifiedTopology: true,

    useNewUrlParser: true,

})
    .then(console.log("Assalamualaikum Boss, your app is connected to MongoDB"))
    .catch(err => console.log(err));

//Route Controller

app.use("/api/auth", authRoute);
app.use("/api/save", postRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("This server is running on the port 5000");
})