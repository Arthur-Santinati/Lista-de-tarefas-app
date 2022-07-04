FROM node:16-alpine

WORKDIR /app/back-end

COPY package.json /app/back-end

RUN npm install

COPY . /app/back-end

EXPOSE 3001
# QUANDO VIRAR UM CONTAINER

CMD ["npm", "start"]