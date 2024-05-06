import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { dashboardProvider } from './dashboard-provider';

type Dashboard = {
  balance: {
    balanceAvailable: string;
    totalBalance: string;
    limit: string;
  };
  salesAmount: string;
  salesQuantity: number;
  averageTicket: string;
};

export interface PayMeeState {
  errorMessage: string;
  dashboard: Array<Dashboard>;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PayMeeState = {
    errorMessage: '',
    dashboard: [],
    loading: 'idle',
}

export const selectorDashboard = (state) =>
  state.dashboard.dashboard as Array<Dashboard>;

export const fetchDashboard = createAsyncThunk('paymee/dashboard', async () => {
  const response = await dashboardProvider();
  return response.data;
});

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.dashboard = action.payload;
    });

    builder.addCase(fetchDashboard.rejected, (state, action) => {
      state.loading = 'idle';
      const codeMapper: Record<string, string> = {
        ERR_BAD_REQUEST: 'Tivemos um problema. tente mais tarde!',
        UNKNOWN: 'Tivemos um problema. tente mais tarde!',
      };

      state.errorMessage = codeMapper[action.error.code || 'UNKNOWN'];
    });
  },
});
