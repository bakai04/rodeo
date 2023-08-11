FROM node:18

WORKDIR app

COPY package* ./

RUN npm i yarn

RUN yarn 

COPY . ./
