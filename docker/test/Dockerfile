# Current LTS at the time.
FROM node:8.11

WORKDIR /var/www/app

COPY package.*json .

RUN npm install -g mocha && npm install

# Bundle the app's entire source code with the image.
COPY . .

CMD npm run start-tests