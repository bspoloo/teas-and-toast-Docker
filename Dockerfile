# Etapa de construcción
FROM node:16 AS build

WORKDIR /app

# Copia los archivos de configuración y instala dependencias
COPY package.json package-lock.json ./
RUN npm install

# Copia todo el código de la aplicación
COPY . .

# Construye la aplicación Next.js
RUN npm run build

# Etapa de producción
FROM node:16 AS production

WORKDIR /app

# Copia los archivos necesarios desde la etapa de construcción
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

CMD ["npm", "start"]
