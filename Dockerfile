FROM node:8.6.0

ENV HOME=/usr/src/app

RUN mkdir $HOME 

COPY package.json $HOME/

WORKDIR $HOME

RUN rm -rf node_modules && npm install
