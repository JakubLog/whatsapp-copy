import { configureStore, createSlice } from '@reduxjs/toolkit';

const chatState = null;
const chatSlice = createSlice({
  name: 'message',
  initialState: chatState,
  reducers: {
    changeChat(state, action) {
      return action.payload;
    }
  }
});

export const { changeChat } = chatSlice.actions;

export const store = configureStore({
  reducer: {
    chat: chatSlice.reducer
  }
});
const typeStore = store.getState();

export interface storeResponse {
  img?: string;
  name?: string;
  id?: string;
}
export type storeRoot = typeof typeStore;
