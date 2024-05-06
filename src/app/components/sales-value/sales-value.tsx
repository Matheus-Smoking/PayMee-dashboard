import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectorDashboard } from 'src/features/dashboard/dashboard-slice';

export const SalesValue = () => {
  const dispatch = useDispatch();
  const dashboardRate = useSelector(selectorDashboard);
  const loading = useSelector((s) => s.dashboard.loading);

  const { salesAmount } = dashboardRate[0] || {};
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
          Volume de Vendas
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-start"
        p={4}
        px={8}
        bgcolor="#e9f9ef"
      >
        <Typography color="info.main">R$</Typography>
        <Typography
          display="inline-block"
          color="info.main"
          ml={1}
          fontWeight="bold"
        >
          {loading === 'pending' ? (
            <CircularProgress
              color="info"
              size="25px"
              sx={{ marginLeft: '10px' }}
            />
          ) : (
            salesAmount
          )}
        </Typography>
      </Box>
    </Box>
  );
};
