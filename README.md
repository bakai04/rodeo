# rodeo

# run using docker

# Установить на машине следующие приложение: git, docker, docker-compose

- Клонировать исходный код бекенда rodeo.kg командой
  `https://github.com/bakai04/rodeo`

- Перейти в директорию с проектом

- Собрать контейнера проект командой:
  `docker compose up --build -d`

Все, проект запущен на порту http://localhost:3000/


# Установка без докера -------------------------------------------
  Запустить команды на установку нужных приложений:
    - apt install npm
    - apt-get install nodejs
 - Нужно открыть проект с терминала и набрать следующие команды 
    1. npm install
    2. npm run dev (для запуска в режиме dev) 
    3. npm run build (для сборки проекта) 

# ----------------------------------------------------------------

 - Нужно настроить переменную окружения формат:
  `VITE_REACT_APP_BASE_URL=http://host/api/v1/`
