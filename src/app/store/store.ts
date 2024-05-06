import { configureStore } from '@reduxjs/toolkit';
import { payMeeSlice } from 'src/features/auth/auth-slice';
import { conversationSlice } from 'src/features/conversation/conversation-slice';
import { dashboardSlice } from 'src/features/dashboard/dashboard-slice';
import { operationSlice } from 'src/features/operation/operation-slice';
import { pendenciesSlice } from 'src/features/pendencies/pendencies-slice';


export default configureStore({
  reducer: {
    auth: payMeeSlice.reducer,
    operations: operationSlice.reducer,
    conversations: conversationSlice.reducer,
    pendencies: pendenciesSlice.reducer,
    dashboard: dashboardSlice.reducer
  },
});
