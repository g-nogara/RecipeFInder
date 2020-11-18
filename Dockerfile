FROM node:12

WORKDIR /server/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm run tsc

CMD [ "npm", "start" ]
