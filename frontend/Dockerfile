# 1. Змінюємо образ на Node 22 (LTS), бо Vite 7+ та React 19 не працюють на Node 18
FROM node:22 AS build
WORKDIR /app

# Копіюємо конфіги залежностей
COPY package*.json ./

# Встановлюємо основні залежності
RUN npm install

# ПРИМУСОВО додаємо те, що розробники забули в package.json
# Додаємо --no-save, щоб не намагатися змінити файл package.json, який ми не хочемо чіпати
RUN npm install classnames @types/classnames --no-save

# Копіюємо весь код
COPY . .

# Виконуємо збірку. 
# Якщо TypeScript все ще буде "лаятись" на типи, можна змінити на: RUN npx tsc --skipLibCheck && vite build
RUN npm run build

# Етап сервінгу (Production)
FROM nginx:alpine

# Для Vite результат завжди в dist. 
# Використовуємо --link для оптимізації, якщо доступно
COPY --from=build /app/dist /usr/share/nginx/html

# Налаштування Nginx для React Router (щоб працювали посилання /login, /products тощо)
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
