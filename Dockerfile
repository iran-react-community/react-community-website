FROM node:12-alpine
WORKDIR /app

COPY . ./
RUN npm install && npm run build

COPY .docker/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["npm", "run", "pm2"]
