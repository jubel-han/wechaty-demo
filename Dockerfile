# IMAGE: gcr/wechat-bot-base:master
FROM node:10.11-slim

ENV PATH "${PATH}:/wechat-bot/node_modules/.bin"

COPY ["package*.json", "/wechat-bot/"]

# export the locales environment variables
RUN apt-get update \
 && apt-get install -y git python build-essential

RUN cd /wechat-bot/ \
 && npm ci --verbose --no-optional \
 && npm dedupe --verbose \
 && npm cache clean --force \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*
