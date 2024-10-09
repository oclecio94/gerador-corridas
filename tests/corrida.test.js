import request from "supertest";
import app from "../src/index";
import { prisma } from "../src/services/prisma";

describe("Testes de Corrida", () => {
  let passageiroId;
  let motoristaId;
  let corridaId;

  beforeAll(async () => {
    const passageiro = await prisma.usuario.create({
      data: {
        nome: "Passageiro Teste",
        email: "passageiro@test.com",
        tipo: "PASSAGEIRO",
      },
    });
    const motorista = await prisma.usuario.create({
      data: {
        nome: "Motorista Teste",
        email: "motorista@test.com",
        tipo: "MOTORISTA",
      },
    });

    passageiroId = passageiro.id;
    motoristaId = motorista.id;
  });

  afterAll(async () => {
    await prisma.historicoCorrida.deleteMany({});
    await prisma.corrida.deleteMany({});
    await prisma.usuario.deleteMany({});
  });

  it("Deve criar uma corrida", async () => {
    console.log("dados enviados pra api:", {
      passageiroId,
      motoristaId,
      destino: "Aeroporto",
      valor: 50,
    });

    const res = await request(app).post("/api/v1/corrida/criar").send({
      passageiroId,
      motoristaId,
      destino: "Aeroporto",
      valor: 50,
    });

    corridaId = res.body.corrida.id;

    console.log("Resposta da criação:", res.body);

    expect(res.statusCode).toBe(201);
    expect(res.body.corrida.passageiroId).toBe(passageiroId);
    expect(res.body.corrida.destino).toBe("Aeroporto");
  });

  it("Deve cancelar uma corrida", async () => {
    console.log("dados enviados pra api:", {
      id: corridaId,
      motivoCancelamento: "Mudança de planos",
      canceladorId: passageiroId,
    });

    const res = await request(app).post("/api/v1/corrida/cancelar").send({
      id: corridaId,
      motivoCancelamento: "Mudança de planos",
      canceladorId: passageiroId,
    });

    console.log("Resposta do cancelamento:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.historico.status).toBe("CANCELADA");
    expect(res.body.historico.motivoCancelamento).toBe("Mudança de planos");
  });
});
