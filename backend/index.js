const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3001;

app.use("/api/users", userRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
