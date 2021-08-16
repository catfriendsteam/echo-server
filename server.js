const express = require("express");
const app = express(); 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

/**
 * @path http://localhost:3000/ 경로
 */
app.get("/", (req, res) => {
    res.send({success:true})
});

app.listen(3000, () => console.log("echo-server"));