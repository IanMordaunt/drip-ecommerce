const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });

  app.get("/api/test", ()=> {
      console.log("test is successful")
  })

app.use(express.json());

  app.use("/api/users", userRoute);

app.listen(process.env.PORT  || 3000, () => {
  console.log("Backend server is running!");
});
