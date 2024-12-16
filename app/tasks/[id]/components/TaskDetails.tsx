import { Todo } from '@/lib/types';

interface TaskDetailsProps {
  todo: Todo;
}

export function TaskDetails({ todo }: TaskDetailsProps) {
  return (
    <>
      <h1 className="todo-details__title">Task Details</h1>
      <div className="todo-details__info">
        <p className="text-sm text-gray-500">Task ID: {todo.id}</p>
        <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
        <p className="text-xl mt-2">{todo.title}</p>
        <p className="mt-2">
          Status:{' '}
          <span
            className={`font-semibold ${
              todo.completed ? 'text-green-500' : 'text-yellow-500'
            }`}
          >
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </p>
      </div>
    </>
  );
}