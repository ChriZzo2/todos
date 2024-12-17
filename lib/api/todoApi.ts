import { Todo } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/todos`;

export const todoApi = {
  fetchTodos: async (): Promise<Todo[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    return response.json();
  },
};