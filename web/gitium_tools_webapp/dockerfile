FROM node:lts-alpine
WORKDIR /app
COPY package.json /app	
RUN npm install
COPY . /app
CMD ["node", "index.js"]
EXPOSE 3000
#docker build -t mynodeapp .
#docker run -d --name gitium_tools_webapp -p 8080:3000 yangqinjiang/gitium_tools:latest