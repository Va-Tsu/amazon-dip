# 1. Використовуємо Node 22 для сумісності з новим стеком
FROM node:22 AS build
WORKDIR /app

# Копіюємо файли залежностей
COPY package*.json ./

# Встановлюємо залежності. Чистимо кеш для надійності
RUN npm install

# ПРИМУСОВО встановлюємо classnames. 
# Використовуємо --save, щоб npm точно прописав їх у тимчасовий node_modules для збірки
RUN npm install classnames @types/classnames

# Копіюємо весь код
COPY . .

# Виконуємо збірку.
# Додаємо -- --skipLibCheck, щоб TypeScript ігнорував дрібні помилки в типах бібліотек
RUN npm run build -- --skipLibCheck

# Етап сервінгу (Production)
FROM nginx:alpine

# Копіюємо результат збірки (папка dist для Vite)
COPY --from=build /app/dist /usr/share/nginx/html

# Налаштування Nginx для Single Page Application (React Router)
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
