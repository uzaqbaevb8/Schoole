const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.send("Salom, backend ishlayapti!");
});

app.listen(5000, () => {
  console.log("Server http://localhost:5000 da ishlayapti");
});
