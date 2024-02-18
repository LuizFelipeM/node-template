FROM node:20-alpine3.18

COPY . .

RUN npm ci
CMD [ "node", "out/index.js" ]