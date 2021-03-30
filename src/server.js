const express = require("express");
const cors = require("cors");

const routers = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(3000, () => {
  console.log('🚀 Server started on port 3000!');
});
