# Etapa 1: build con Node
FROM node:18-alpine AS build

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias y código fuente
COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_API_GATEWAY
ENV VITE_API_GATEWAY=$VITE_API_GATEWAY

# Construir la app para producción
RUN npm run build

# Etapa 2: servir con Nginx
FROM nginx:stable-alpine

# Copiar configuración de nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Elimina archivos html por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar el build generado desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]