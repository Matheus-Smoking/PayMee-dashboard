import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorDashboard } from 'src/features/dashboard/dashboard-slice';

export function AverageTicket() {
  const dashboardRate = useSelector(selectorDashboard);
  const loading = useSelector((s) => s.dashboard.loading);
  const { averageTicket } = dashboardRate[0] || {};

  return (
    <Box border="1px solid #e2e2e2" maxWidth="100%" bgcolor="white" flex={1}>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        p={2}
        m={0}
      >
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Ticket Médio
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        p={4}
        px={8}
        bgcolor="#fffae9"
      >
        <Typography display="inline-block" color="warning.main">
          R$
        </Typography>
        <Typography color="warning.main" ml={1} fontWeight="bold">
          {' '}
          {loading === 'pending' ? (
            <CircularProgress
              color="warning"
              size="25px"
              sx={{ marginLeft: '10px' }}
            />
          ) : (
            averageTicket
          )}
        </Typography>
      </Box>
    </Box>
  );
}
