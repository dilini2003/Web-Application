# Stage 1: Build the React (Vite) app
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the project files
COPY . .

# Build the production version of the app
RUN npm run build

# Stage 2: Serve the built app using nginx
FROM nginx:alpine

# Copy the build output from Vite to nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
