import { criar, cancelar } from "../controllers/corrida.controller.js";

export const corridaRoutes = (app) => {
  app.post("/api/v1/corrida/criar", criar);
  app.post("/api/v1/corrida/cancelar", cancelar);
};
