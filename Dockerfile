FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/src/startup.sh /app/src/startup.sh
RUN chmod +x /app/src/startup.sh
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["sh", "/app/src/startup.sh"]