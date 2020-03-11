# Base Image
FROM node
# APP dir
RUN mkdir -p /opt/app

WORKDIR /opt/app
COPY package.json .
RUN npm install --quiet
RUN npm install --save-dev nodemon

EXPOSE 8000

