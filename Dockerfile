FROM node:8.6.0

ENV APP_DIR=/srv/app

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

CMD ["bash"]
