# Todo List Application

A modern Todo List application built with Next.js, TypeScript, and Redux. This application allows users to manage their tasks with features like adding, completing, and deleting todos.

## Features

- View list of todos
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- View detailed information about each todo
- Responsive design
- State management with Redux
- Type safety with TypeScript

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- Next.js 13
- TypeScript
- Redux Toolkit
- SCSS
- Tailwind CSS
- shadcn/ui
- Lucide React Icons

## Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/lib` - Utility functions, types, and Redux store
- `/components` - Reusable UI components
- `/styles` - Global styles and SCSS modules

## API

The application uses JSONPlaceholder API for fetching initial todos:
- Endpoint: https://jsonplaceholder.typicode.com/todos

Note: Changes (adding, updating, deleting) are only stored locally in Redux state.