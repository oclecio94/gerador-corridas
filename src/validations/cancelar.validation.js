import { z } from "zod";

export const cancelarValidation = z.object({
  id: z.number().int().positive(),
  canceladorId: z.number().int().positive(),
  motivoCancelamento: z.string().min(5, "Motivo de cancelamento é obrigatório"),
});
