import { Box, Grid } from '@mui/material';
import { Balance } from '../components/balance/balance';
import { ConversationRate } from '../components/conversation-rate/conversation-rate';
import { RequestRefund } from '../components/request-refund/request-refund';
import { Pendencies } from '../components/pendencies/pendencies';
import { Operations } from '../components/operations/operations';
import { SalesValue } from '../components/sales-value/sales-value';
import { SalesQuantity } from '../components/sales-quantity/sales-quantily';
import { AverageTicket } from '../components/average-ticket/average-ticket';

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
        <Grid item xs={6} md={4} sm={10}>
          <Balance />
          <Box my={2}>
            <ConversationRate />
          </Box>
          <RequestRefund />
        </Grid>
        <Grid item xs={10} md={8} sm={10}>
          <Box display="flex" justifyContent="space-between">
            <SalesValue />
            <SalesQuantity />
            <AverageTicket />
          </Box>
          <Box my={2}>
            <Pendencies />
          </Box>
          <Operations />
        </Grid>
      </Grid>
    </Box>
  );
};
