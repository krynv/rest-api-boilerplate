# Build Stage
FROM node:lts-alpine AS builder
WORKDIR /app
# Copying package.json and package-lock.json
COPY package*.json ./
# Installing all dependencies (including devDependencies)
RUN npm install
# Copying the rest of your application code
COPY . .
# Compiling TypeScript to JavaScript
RUN npm run build


# Production Stage
FROM node:lts-alpine AS production
WORKDIR /app
# Copying package.json and package-lock.json
COPY package*.json ./
# Installing only production dependencies
RUN npm install --production
# Copying compiled JavaScript from the build stage
COPY --from=builder /app/dist ./dist
# Exposing the port your app runs on
EXPOSE 8080
# Command to run the app
CMD ["node", "dist/index.js"]
