import express from "express";
import { userRouter } from "./routes/users-router.js";


const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
