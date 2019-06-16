FROM mhart/alpine-node:12
WORKDIR /app

COPY . ./
RUN npm install && npm run build

COPY .docker/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["npm", "run", "pm2"]
