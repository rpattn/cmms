FROM node:21.6.1 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 6000000
RUN npm config set fetch-retry-mintimeout 1000000
RUN NODE_OPTIONS="--max_old_space_size=4096" npm install --legacy-peer-deps
COPY . .
RUN npm run build:vite

FROM nginx:1.27.0-alpine
# Copy Vite build output
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/.env.example /usr/share/nginx/html/.env
COPY --from=build /usr/src/app/nginx-custom.conf /etc/nginx/conf.d/default.conf

RUN apk add --update nodejs
RUN apk add --update npm

RUN npm i -g runtime-env-cra

WORKDIR /usr/share/nginx/html
EXPOSE 3000

# Generate runtime-env.js at container start (consumed by index.html)
CMD ["/bin/sh", "-c", "runtime-env-cra && nginx -g \"daemon off;\""]

