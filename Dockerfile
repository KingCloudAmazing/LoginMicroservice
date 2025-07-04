FROM node

WORKDIR /userAuthService

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]