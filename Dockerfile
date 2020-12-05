FROM ubuntu:latest
WORKDIR /app

RUN apt-get -y update

RUN apt-get install -y nodejs

RUN apt-get install -y npm

RUN npm install -g http-server

ADD . /app

CMD ["http-server","-s"]

COPY . .
