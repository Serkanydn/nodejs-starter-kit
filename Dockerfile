FROM node:latest
WORKDIR /opt/node-starter-server
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node","src/app.js"]
