FROM node:12

LABEL maintainer "devdw98@gmail.com"

RUN mkdir /app

WORKDIR /app

ADD ./ /app

RUN npm install

EXPOSE 3000

CMD npm start