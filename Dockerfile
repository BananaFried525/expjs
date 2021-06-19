FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081
ENV NODE_ENV=test

CMD [ "npm","start" ]