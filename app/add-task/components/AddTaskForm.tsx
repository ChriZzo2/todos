'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addTodo } from '@/lib/store/features/todoSlice';
import { fetchTodos } from '@/lib/store/features/todoSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export function AddTaskForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const { todos, status } = useAppSelector((state) => state.todos);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const uniqueUserIds = Array.from(new Set(todos.map(todo => todo.userId))).sort((a, b) => a - b);
  const [selectedUserId, setSelectedUserId] = useState(uniqueUserIds[0] || 1);

  const options = uniqueUserIds.map(userId => ({
    value: userId.toString(),
    label: `User ${userId}`
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTodo({
          title: title.trim(),
          completed: false,
          userId: selectedUserId,
        })
      );
      router.push('/');
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название задачи"
        className="todo-form__input"
      />
      
      <Select
        value={selectedUserId.toString()}
        onChange={(value) => setSelectedUserId(Number(value))}
        options={options}
      />

      <div className="flex gap-4">
        <Button variant="outline" type="button" onClick={() => router.push('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Назад
        </Button>
        <Button type="submit" className="flex-1">
          <Save className="mr-2 h-4 w-4" />
          Сохранить задачу
        </Button>
      </div>
    </form>
  );
}