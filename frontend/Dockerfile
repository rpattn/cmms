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
COPY --from=build /usr/src/app/nginx-custom.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html
EXPOSE 3000

# Start Nginx
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]

