FROM node:20-alpine

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 2003

CMD [ "npm","run","start" ]


