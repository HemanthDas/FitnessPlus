import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = parseInt(process.env.PORT, 10) || 3001;

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
