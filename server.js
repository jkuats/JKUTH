const express = require("express");
const path = require("path");

const app = express();

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// homepage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// IMPORTANT: Railway port binding
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});