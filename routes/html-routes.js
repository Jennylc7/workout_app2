//connect with express with routes
const router = require("express").Router();
const path = require("path");
// routes
//app.use(require("./routes/api.js"));
router.get("/exercise", (req, res) =>{
 
    //represents path to project
    res.sendFile(path.join(__dirname ,"../public/exercise.html"))
})
router.get("/stats", (req, res) =>{
 
  //represents path to project
  res.sendFile(path.join(__dirname ,"../public/stats.html"))
})
router.get("/", (req, res) =>{
 
  //represents path to project
  res.sendFile(path.join(__dirname ,"../public/index.html"))
})
module.exports = router;