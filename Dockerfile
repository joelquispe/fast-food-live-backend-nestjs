FROM node:21-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]