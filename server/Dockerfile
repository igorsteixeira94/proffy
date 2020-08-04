FROM node:lts-alpine

RUN mkdir -p /usr/src/webapi

WORKDIR /usr/src/webapi

COPY package.*json .

RUN yarn install --silent

COPY . .

EXPOSE 3333

CMD ["yarn","start"]
