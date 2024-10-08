import { z } from "zod";

export const criarValidation = z.object({
  passageiroId: z.number().int().positive(),
  motoristaId: z.number().int().positive(),
  destino: z.string().min(5, "Destino é obrigatório"),
  valor: z.number().positive().min(3, "Valor é obrigatório"),
});
