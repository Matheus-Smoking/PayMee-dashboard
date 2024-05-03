import { Box, Grid } from '@mui/material';
import Balance from '../components/balance/balance';
import ConversationRate from '../components/conversationRate/conversation-rate';
import RequestRefund from '../components/requestRefund/request-refund';
import Pendencies from '../components/pendencies/pendencies';
import Operations from '../components/operations/operations';
import { SalesValue } from '../components/salesValue/sales-value';
import { SalesQuantity } from '../components/salesQuantity/sales-quantily';
import { AverageTicket } from '../components/averageTicket/average-ticket';

export const Dashboard = () => {
  return (
    <Box
      component="section"
      maxWidth="1200px"
      margin="0 auto"
      minHeight="100vh"
      pt={4}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Balance />
          <Box my={3}>
            <ConversationRate />
          </Box>
          <RequestRefund />
        </Grid>
        <Grid item xs={6} md={8}>
          <Box display="flex" justifyContent="space-between">
            <SalesValue />
            <SalesQuantity />
            <AverageTicket />
          </Box>
          <Box my={3}>
            <Pendencies />
          </Box>
          <Operations />
        </Grid>
      </Grid>
    </Box>
  );
};
