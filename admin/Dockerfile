# Stage 1: Build the Vite app
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the project for production
RUN npm run build

# Stage 2: Use Nginx to serve the built app
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for serving
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
