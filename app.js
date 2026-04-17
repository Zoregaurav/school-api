const express=require("express");
const cors=require("cors");
require("dotenv").config();

const schoolRoutes=require("./routes/schoolRoutes");

const app=express();

app.use(cors());
app.use(express.json());

app.use("/",schoolRoutes);

app.get("/", (req, res) => {
      res.send("Server is working 🚀");
});

const PORT=8080;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
});