export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface TodoState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedUserId: number | null;
}