# Use a lightweight Node.js image
FROM node:18-alpine

# Create and set working directory
WORKDIR /app

# Copy package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your application code
COPY . .

# Expose the backend port
EXPOSE 4000

# Use environment variables from Docker or docker-compose
ENV NODE_ENV=production

# Start the backend server
CMD ["node", "server.js"]
