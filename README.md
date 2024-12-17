# Todo List Application

Современное приложение для управления задачами, построенное с использованием Next.js 14, TypeScript и Redux Toolkit.

## Основные возможности

- 📝 Создание и управление задачами
- 👥 Фильтрация задач по пользователям
- ✅ Отметка задач как выполненных/невыполненных
- 🗑️ Удаление задач
- 📱 Адаптивный дизайн
- 🌐 Интеграция с внешним API
- 🔄 Управление состоянием через Redux
- 🎨 Стилизация с помощью Tailwind CSS и SCSS
- 🎯 Типизация с TypeScript

## Технологический стек

- Next.js 14
- TypeScript
- Redux Toolkit
- SCSS/Tailwind CSS
- shadcn/ui компоненты
- Lucide React иконки

## Начало работы

1. Клонируйте репозиторий:
   ```bash
   git clone [url-репозитория]
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Создайте файл .env:
   ```plaintext
   NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
   ```

4. Запустите проект:
   ```bash
   npm run dev
   ```

5. Откройте [http://localhost:3000](http://localhost:3000)

## Структура проекта

- `/app` - Next.js app directory containing pages and layouts
- `/lib` - Utility functions, types, and Redux store
- `/components` - Reusable UI components

## API

The application uses JSONPlaceholder API for fetching initial todos:
- Endpoint: https://jsonplaceholder.typicode.com/todos

Note: Changes (adding, updating, deleting) are only stored locally in Redux state.