FROM node:16.15.1-alpine

ENV NODE_ENV=production
ENV TZ=America/Los_Angeles
WORKDIR /usr/src/app
COPY server.js ./

COPY .next ./.next
COPY node_modules ./node_modules
COPY public ./public
EXPOSE 80
CMD ["node", "server.js"]