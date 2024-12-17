'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {fetchTodos, toggleTodo} from '@/lib/store/features/todoSlice';
import { TaskDetails } from './components/TaskDetails';
import { TaskActions } from './components/TaskActions';
import {useEffect} from "react";

export default function TaskPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) =>
    state.todos.todos.find((t) => t.id === parseInt(params.id))
  );
  const {  status } = useAppSelector((state) => state.todos);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  if (!todo) {
    return;
  }

  return (
    <div className="todo-details">
      <div className="todo-details__card">
        <TaskDetails todo={todo} />
        <TaskActions
          todo={todo}
          onBack={() => router.push('/')}
          onToggle={() => dispatch(toggleTodo(todo.id))}
        />
      </div>
    </div>
  );
}