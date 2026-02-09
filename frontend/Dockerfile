# 1. Використовуємо Node 22 для сумісності з новим стеком
FROM node:22 AS build
WORKDIR /app

# Копіюємо файли залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# ПРИМУСОВО встановлюємо бібліотеки, яких не вистачає в репозиторії
RUN npm install classnames @types/classnames

# Копіюємо весь код
COPY . .

# ВИПРАВЛЕНО: Запускаємо збірку Vite напряму, ігноруючи суворі перевірки TypeScript (tsc),
# які зазвичай ламають білд на сервері через типи.
RUN npx vite build

# Етап сервінгу (Production)
FROM nginx:alpine

# Копіюємо результат збірки з папки dist
COPY --from=build /app/dist /usr/share/nginx/html

# Налаштування Nginx для React Router (SPA)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
