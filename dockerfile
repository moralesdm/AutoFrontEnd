# Etapa 1: Build con Node
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar solo los archivos de dependencias para aprovechar la caché
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la app
COPY . .

# Argumento para la URL del gateway
ARG VITE_API_GATEWAY

# Compilar la aplicación (inyectando la variable directamente)
RUN VITE_API_GATEWAY=$VITE_API_GATEWAY npm run build

# Etapa 2: Producción con nginx
FROM nginx:alpine

# Elimina el contenido por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto
EXPOSE 3000

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
