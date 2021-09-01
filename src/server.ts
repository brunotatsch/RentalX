import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
const port: number = 3333;

app.use(express.json());
app.use("/categories", categoriesRoutes);

app.listen(port, () => console.log(`Server is Running on port ${port}`))