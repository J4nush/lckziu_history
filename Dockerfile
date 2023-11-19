FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
RUN npm update
RUN npm install
COPY . .
EXPOSE 8000

