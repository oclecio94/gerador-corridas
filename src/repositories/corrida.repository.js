import { prisma } from "../services/prisma.js";

export const criarCorrida = async (data) => {
  const { passageiroId, motoristaId, destino, valor } = data;

  try {
    const corrida = await prisma.corrida.create({
      data: {
        passageiroId,
        motoristaId,
        destino,
        status: "CRIADA",
      },
    });

    const historico = await prisma.historicoCorrida.create({
      data: {
        corrida: {
          connect: {
            id: corrida.id,
          },
        },
        inicio: new Date(),
        status: "CRIADA",
        valor,
      },
    });

    return { corrida, historico };
  } catch (error) {
    throw new Error("Erro ao criar corrida");
  }
};

export const cancelarCorrida = async (data) => {
  const { id, canceladorId, motivoCancelamento } = data;

  try {
    const corrida = await prisma.corrida.update({
      where: { id },
      data: { status: "CANCELADA" },
    });

    const historico = await prisma.historicoCorrida.create({
      data: {
        corridaId: id,
        canceladorId,
        motivoCancelamento,
        fim: new Date(),
        status: "CANCELADA",
      },
    });

    return { corrida, historico };
  } catch (error) {
    throw new Error("Erro ao cancelar corrida");
  }
};
