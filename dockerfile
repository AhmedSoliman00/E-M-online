# Use an official Node.js runtime as a parent image
FROM node:19-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Debugging step to check build output
RUN ls -la dist  # List contents of dist folder to confirm it exists

# Install a lightweight HTTP server to serve the built files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3005

# Command to serve the built files
CMD ["serve", "-s", "dist", "-l", "3005"]
