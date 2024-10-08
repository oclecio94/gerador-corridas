import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
routes(app);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Aplicação está rodando!" });
});

export default app;
