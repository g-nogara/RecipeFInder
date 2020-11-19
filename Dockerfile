FROM node:12

WORKDIR /server/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN npm install typescript -g

RUN tsc -p tsconfig.json

CMD [ "node", "TS/server.js" ]
