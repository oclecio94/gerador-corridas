import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
routes(app);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Aplicação está rodando!" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000!");
});

export default app;
