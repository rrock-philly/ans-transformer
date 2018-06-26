# Current LTS at the time.
FROM node:8.11

WORKDIR /var/www/app

COPY package.*json ./

RUN npm install -g pm2 && npm install

# Bundle the app's entire source code with the image.
COPY . .

EXPOSE 7197

CMD npm run start-docker