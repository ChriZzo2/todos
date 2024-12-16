'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchTodos, setSelectedUserId } from '@/lib/store/todosSlice';
import { TodoItem } from './TodoItem';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Select } from '@/components/ui/select';

export function TodoList() {
  const dispatch = useAppDispatch();
  const { todos, status, error, selectedUserId } = useAppSelector((state) => state.todos);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const uniqueUserIds = Array.from(new Set(todos.map(todo => todo.userId))).sort((a, b) => a - b);
  const filteredTodos = selectedUserId 
    ? todos.filter(todo => todo.userId === selectedUserId)
    : todos;

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'failed') {
    return <ErrorMessage message={error || 'Failed to load todos'} />;
  }

  const options = [
    { value: '', label: 'All Users' },
    ...uniqueUserIds.map(userId => ({
      value: userId.toString(),
      label: `User ${userId}`
    }))
  ];

  return (
    <div>
      <div className="mb-6">
        <Select
          value={selectedUserId?.toString() || ''}
          onChange={(value: string) => dispatch(setSelectedUserId(value ? Number(value) : null))}
          options={options}
        />
      </div>
      <div className="space-y-4">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}