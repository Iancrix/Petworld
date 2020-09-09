FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY frontend/package*.json ./frontend/

RUN npm install
RUN npm install --prefix frontend

# Bundle app source
COPY . .

RUN npm run build --prefix frontend

EXPOSE 5000

CMD [ "npm", "run", "start"]

