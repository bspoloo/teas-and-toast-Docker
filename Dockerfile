# Etapa de construcción
FROM node:alpine AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .

# Agregar un comando para verificar si se copiaron correctamente los archivos
RUN ls -la /app

# Ejecutar la construcción y registrar la salida
RUN npm run build --verbose

# Etapa de producción
FROM node:alpine AS production
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
CMD ["npm", "start"]
