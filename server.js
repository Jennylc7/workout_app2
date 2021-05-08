const express = require("express");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes.js");
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlRoutes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api-routes.js"))
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
