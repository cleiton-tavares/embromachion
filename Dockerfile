FROM node:14.18.0-buster
WORKDIR /var/www
RUN rm -rf /var/www && mkdir /var/www
COPY . /var/www
RUN rm -Rf /var/www/node_modules
RUN rm -Rf package-lock.json
RUN npm install
EXPOSE ${PORT}
ENTRYPOINT npm run dev-start