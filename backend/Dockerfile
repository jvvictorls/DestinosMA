FROM node:18.20

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]