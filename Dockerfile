FROM node:17-alpine3.12

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@8.1.4
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","run","dev"]