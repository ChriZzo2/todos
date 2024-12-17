'use client';

import { Todo } from '@/lib/types';
import { useAppDispatch } from '@/lib/hooks';
import { toggleTodo, deleteTodo } from '@/lib/store/features/todoSlice';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="todo-list__item">
      <button
        className="flex items-center"
      >
          <div onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <Circle className="h-5 w-5 text-gray-400" />
        )}
          </div>
        <Link href={`/tasks/${todo.id}`}>
          <span
            className={`todo-list__title ${
              todo.completed ? 'todo-list__title--completed' : ''
            }`}
          >
            {`${todo.title}${' '}(${todo.id})`}
          </span>
        </Link>
      </button>
      <div className="todo-list__actions">
        <Button
          variant="destructive"
          size="sm"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}