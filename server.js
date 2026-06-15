<<<<<<< HEAD
const express = require("express");
const path = require("path");

const app = express();

// MUST serve public folder correctly
app.use(express.static(path.join(__dirname, "public")));

// Force homepage load
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
=======
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(3000,()=>{
    console.log('Server running on port 3000');
>>>>>>> 3a742f33e56c2ae13a7a5c7bd7d6a2d1863a108f
});