FROM node:6.10.3-slim

RUN apt-get update \
    && apt-get install -y software-properties-common \
    && apt-add-repository -y ppa:nginx/stable


RUN echo "# deb-src http://ppa.launchpad.net/nginx/stable/ubuntu trusty main" > /etc/apt/sources.list.d/nginx-stable-trusty.list

RUN apt-get install -y nginx

WORKDIR /app

COPY . /app/

EXPOSE 80

RUN  npm install \
     && npm run build \
     && cp -r dist/* /usr/share/nginx/html/ \
     && rm -rf dist/ \
     && rm -rf node_modules/
    
CMD ["nginx","-g","daemon off;"]


