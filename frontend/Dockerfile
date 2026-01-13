# Встановлюємо Node
FROM node:20

WORKDIR /app

# Копіюємо package.json і встановлюємо залежності
COPY package.json package-lock.json* ./
RUN npm install

# Копіюємо решту файлів
COPY . .

EXPOSE 5173

# Запуск dev сервера Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
