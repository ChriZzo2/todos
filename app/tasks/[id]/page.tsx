'use client';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleTodo } from '@/lib/store/features/todoSlice';
import { TaskDetails } from './components/TaskDetails';
import { TaskActions } from './components/TaskActions';

export default function TaskPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const todo = useAppSelector((state) =>
    state.todos.todos.find((t) => t.id === parseInt(params.id))
  );

  if (!todo) {
    return <div>Task not found</div>;
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