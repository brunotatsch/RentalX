import express from "express";

const app = express();
const port: number = 3333;

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello World !!!" })
});

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
})

app.listen(port, () => console.log(`Server is Running on port ${port}`))