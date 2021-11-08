const express = require("express");

const app = express();

app.get("/", function(req, res) {
      res.send("<h1>Aexander is learning express.js</h1>");
});

app.get("/contact", function(req, res) {
    res.send("contact Me At: msumba83@gmail.com");
});

app.get("/about", function(req, res)  {
    res.send("<h1>Welcome to Alexander's Website</h1>");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Cofee</li><li>Tea</li><li>Wine</li></ul>")
})


app.listen(3000, function() {
    console.log("Server started on port 3000");
});

