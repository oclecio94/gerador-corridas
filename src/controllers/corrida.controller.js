import {
  criarCorrida,
  cancelarCorrida,
} from "../repositories/corrida.repository";
import { cancelarValidation } from "../validations/cancelar.validation";
import { criarValidation } from "../validations/criar.validation";

export const criar = async (req, res) => {
  try {
    const data = await criarValidation.parse(req.body);
    const result = await criarCorrida(data);
    return res.status(201).send(result);
  } catch (e) {
    return res.status(400).send(e);
  }
};

export const cancelar = async (req, res) => {
  try {
    const data = await cancelarValidation.parse(req.body);
    const result = await cancelarCorrida(data);
    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send(e);
  }
};
