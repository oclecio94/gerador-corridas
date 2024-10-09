# Use a imagem do Node.js
FROM node:22

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Copiar a pasta prisma
COPY prisma ./prisma

# Instalar dependências
RUN npm install

# Copiar todos os arquivos para o contêiner
COPY . .

# Expor a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/index.js"]
