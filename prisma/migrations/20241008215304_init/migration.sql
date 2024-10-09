-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Corrida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "passageiroId" INTEGER NOT NULL,
    "motoristaId" INTEGER NOT NULL,
    "destino" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CRIADA',
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "Corrida_passageiroId_fkey" FOREIGN KEY ("passageiroId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Corrida_motoristaId_fkey" FOREIGN KEY ("motoristaId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HistoricoCorrida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "corridaId" INTEGER NOT NULL,
    "canceladorId" INTEGER,
    "motivoCancelamento" TEXT,
    "inicio" DATETIME,
    "fim" DATETIME,
    "valor" INTEGER,
    "status" TEXT NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "HistoricoCorrida_corridaId_fkey" FOREIGN KEY ("corridaId") REFERENCES "Corrida" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "HistoricoCorrida_canceladorId_fkey" FOREIGN KEY ("canceladorId") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
