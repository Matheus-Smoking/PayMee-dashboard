import { configureStore } from '@reduxjs/toolkit';
import { payMeeSlice } from 'src/features/auth/authSlice';
import { conversationSlice } from 'src/features/conversation/conversationSlice';
import { operationSlice } from 'src/features/operation/operation-slice';


export default configureStore({
  reducer: {
    auth: payMeeSlice.reducer,
    operations: operationSlice.reducer,
    conversations: conversationSlice.reducer,
  },
});
