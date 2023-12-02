FROM node:alpine

WORKDIR /usr/app

RUN apk update && apk add git

EXPOSE 3000