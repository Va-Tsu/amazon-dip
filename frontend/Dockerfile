# Етап збірки
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
# Встановлюємо те, що є в конфігу
RUN npm install

# ПРИМУСОВО встановлюємо те, що розробники забули додати в package.json
RUN npm install classnames @types/classnames

COPY . .
# Пропускаємо помилки типів, якщо вони будуть заважати білду (опціонально)
RUN npm run build

# Етап сервінгу
FROM nginx:alpine
# Для Vite копіюємо з dist
COPY --from=build /app/dist /usr/share/nginx/html

# Додаємо конфіг для підтримки маршрутизації React (щоб не було 404)
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
