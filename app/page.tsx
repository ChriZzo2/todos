'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { TodoList } from '@/components/todos/TodoList';

export default function Home() {
  return (
    <div className="todo-list">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <Link href="/add-task">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Task1
          </Button>
        </Link>
      </div>
      <TodoList />
    </div>
  );
}