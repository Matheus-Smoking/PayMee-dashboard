import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authProvider } from './auth-provider';
import { router } from '../../app/config/rounters';

export interface PayMeeState {
  accessToken?: string | null;
  errorMessage: string;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: PayMeeState = {
  accessToken: localStorage.getItem('token'),
  errorMessage: '',
  loading: 'idle',
};

export const selectorErrorMessage = (state) => state.auth.errorMessage;
export const selectorAccesToken = (state) => state.auth.accessToken;

export const fetchLogin = createAsyncThunk(
  'auth/login',
  (payload: { email: string; password: string; token: string }) =>
    authProvider(payload.email, payload.password, payload.token).then(
      (res) => res.data
    )
);

export const payMeeSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('token', action.payload.accessToken);
      window.scrollTo(0,0)
      router.navigate('/');
    });

    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = 'idle';
      const codeMapper: Record<string, string> = {
        ERR_BAD_REQUEST: 'Usuário ou senha inválidos',
        UNKNOWN: 'Tivemos um problema. tente mais tarde!',
      };

      state.errorMessage = codeMapper[action.error.code || 'UNKNOWN'];
    });
  },
});
