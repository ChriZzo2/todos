import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '@/lib/types';
import { todoApi } from '@/lib/api/todoApi';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await todoApi.fetchTodos();
});

const initialState: TodoState = {
  todos: [],
  status: 'idle',
  error: null,
  selectedUserId: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      const newId = Math.max(...state.todos.map((todo) => todo.id), 0) + 1;
      state.todos.push({ ...action.payload, id: newId });
    },
    setSelectedUserId: (state, action: PayloadAction<number | null>) => {
      state.selectedUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch todos';
      });
  },
});

export const { toggleTodo, deleteTodo, addTodo, setSelectedUserId } = todoSlice.actions;
export default todoSlice.reducer;