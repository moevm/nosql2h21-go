FROM node
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
EXPOSE 3000
EXPOSE 9229
CMD yarn dev