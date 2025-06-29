import express from "express";
import connectToMongoDB from "./mongo/connect.js";
import todoRoutes from "./routes/todo_routes.js";
const app = express();
const port = 5000;
app.use(express.json())

app.use("/api/todos", todoRoutes);

app.listen(port, (err) => {
  connectToMongoDB;
  console.log(`server  started  at  port ${port}`);
});
