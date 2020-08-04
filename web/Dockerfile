FROM node:lts-alpine

RUN mkdir -p /usr/src/web

WORKDIR /usr/src/web

COPY package.*json .

RUN yarn install --silent

COPY . .

EXPOSE 3000

CMD [ "yarn","start" ]