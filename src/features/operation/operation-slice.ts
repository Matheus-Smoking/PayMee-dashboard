import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { operationProvider } from './provider/operator-provider';

type Operation = {
  refund: boolean;
  TID: string;
  date: string;
  value: string;
  rate: string;
  liquid: string;
};

export interface PayMeeState {
  errorMessage: string;
  operations: Array<Operation>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PayMeeState = {
  errorMessage: '',
  operations: [],
  loading: 'idle',
};

export const selectorOperations = (state) =>
  state.operations.operations as Array<Operation>;

export const fetchOperation = createAsyncThunk(
  'paymee/operations',
  async (params: { date: string; sort?: string }) => {
    const response = await operationProvider(params.date, params?.sort);
    return response.data;
  }
);

export const operationSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOperation.fulfilled, (state, action) => {
      state.operations = action.payload;
    });

    builder.addCase(fetchOperation.rejected, (state, action) => {
      const codeMapper: Record<string, string> = {
        ERR_BAD_REQUEST: 'Tivemos um problema. tente mais tarde!',
        UNKNOWN: 'Tivemos um problema. tente mais tarde!',
      };

      state.errorMessage = codeMapper[action.error.code || 'UNKNOWN'];
    });
  },
});
