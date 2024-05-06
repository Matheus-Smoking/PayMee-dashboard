import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pendenciesProvider } from './pendencies-provider';

type Pendencies = {
  date: string;
  sales: number;
  withdrawals: number;
  refunds: number;
  payouts: number;
};

export interface PayMeeState {
  errorMessage: string;
  pendencies: Array<Pendencies>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PayMeeState = {
  errorMessage: '',
  pendencies: [],
  loading: 'idle',
};

export const selectorPendencies = (state) =>
  state.pendencies.pendencies as Array<Pendencies>;

export const fetchPendencies = createAsyncThunk(
  'paymee/pendencies',
  async (params: { date: string }) => {
    const response = await pendenciesProvider(params.date);
    return response.data;
  }
);

export const pendenciesSlice = createSlice({
  name: 'pendencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPendencies.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchPendencies.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.pendencies = action.payload;
    });

    builder.addCase(fetchPendencies.rejected, (state, action) => {
      state.loading = 'idle';
      const codeMapper: Record<string, string> = {
        ERR_BAD_REQUEST: 'Tivemos um problema. tente mais tarde!',
        UNKNOWN: 'Tivemos um problema. tente mais tarde!',
      };

      state.errorMessage = codeMapper[action.error.code || 'UNKNOWN'];
    });
  },
});
