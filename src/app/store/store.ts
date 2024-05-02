import { configureStore } from '@reduxjs/toolkit';
import { payMeeSlice } from 'src/features/auth/authSlice';


export default configureStore({
  reducer: {
    auth: payMeeSlice.reducer,
  },
});
