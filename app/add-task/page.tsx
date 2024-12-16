'use client';

import { AddTaskForm } from './components/AddTaskForm';

export default function AddTaskPage() {
  return (
    <div className="todo-form">
      <h1 className="text-3xl font-bold mb-6">Add New Task</h1>
      <AddTaskForm />
    </div>
  );
}