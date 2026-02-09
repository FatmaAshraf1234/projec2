const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoute");

const app = express();

// connect to database first
connectDB();

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", authRoute);

// start server 
app.listen(5000, ()=>{
    console.log('Server running on port 5000');
});
