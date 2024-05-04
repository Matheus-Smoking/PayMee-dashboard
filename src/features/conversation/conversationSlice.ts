import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { conversationProvider } from './provider/conversation-provider';

type Conversation = {
  date: string;
  value: number;
  total: string;
  pending: string;
};

export interface PayMeeState {
  errorMessage: string;
  conversations: Array<Conversation>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PayMeeState = {
  errorMessage: '',
  conversations: [],
  loading: 'idle',
};

export const selectorConversation = (state) =>
  state.conversations.conversations as Array<Conversation>;

export const fetchConversation = createAsyncThunk(
  'paymee/conversations',
  async (params: { date: string }) => {
    const response = await conversationProvider(params.date);
    return response.data;
  }
);

export const conversationSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchConversation.fulfilled, (state, action) => {
      state.conversations = action.payload;
    });

    builder.addCase(fetchConversation.rejected, (state, action) => {
      const codeMapper: Record<string, string> = {
        ERR_BAD_REQUEST: 'Tivemos um problema. tente mais tarde!',
        UNKNOWN: 'Tivemos um problema. tente mais tarde!',
      };

      state.errorMessage = codeMapper[action.error.code || 'UNKNOWN'];
    });
  },
});
