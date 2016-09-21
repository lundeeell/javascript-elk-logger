FROM node:argon

# Create app directory
WORKDIR /app

# Install app dependencies
ADD package.json /app/package.json
RUN npm install

ADD . /app

EXPOSE 8080
CMD ["node", "server.js"]
