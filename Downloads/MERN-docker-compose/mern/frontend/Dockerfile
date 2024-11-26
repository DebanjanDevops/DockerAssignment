# Use the official image as a parent image
# Description: Dockerfile for the client side of the MERN stack application

# Use the official image as a parent image
#FROM node:18.9.1

# Set the working directory
#WORKDIR /app

#COPY package.json package-lock.json ./

# Copy the file from your host to your current location
#COPY package.json .

# Run the command inside your image filesystem
#RUN npm install
#RUN npm set registry https://registry.npmjs.org/ && npm i vite

# Inform Docker that the container is listening on the specified port at runtime
#EXPOSE 5173

# Copy the rest of your app's source code from your host to your image filesystem
#COPY . .

# Run the specified command within the container
#CMD ["npm", "run", "dev"]
# Use official Node.js image as a parent image
FROM node:latest

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package.json .

#RUN npm cache clean --force && config rm proxy &&  config rm https-proxy

RUN npm cache clean --force && \
    npm config delete proxy && \
    npm config delete https-proxy && \
    npm install --legacy-peer-deps

RUN echo "nameserver 8.8.8.8" > /etc/resolv.conf

# Install dependencies (including Vite)
RUN npm install

# Expose the port that Vite uses (default is 5173)
EXPOSE 5173,22,80,8080,443 

# Copy the rest of your application code
COPY . .

# Run the development server with Vite
CMD ["npm", "run", "dev"]

