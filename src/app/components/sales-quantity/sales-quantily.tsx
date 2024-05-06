import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectorDashboard } from 'src/features/dashboard/dashboard-slice';

export const SalesQuantity = () => {
  const dashboardRate = useSelector(selectorDashboard);
  const loading = useSelector((s) => s.dashboard.loading);

  const { salesQuantity } = dashboardRate[0] || {};
  return (
    <Box
      border="1px solid #e2e2e2"
      maxWidth="100%"
      bgcolor="white"
      flex={1}
      mx={2}
    >
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        p={2}
        m={0}
      >
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Quantidade de Vendas
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        p={4}
        px={8}
        bgcolor="#e9eeff"
      >
        <Typography color="secondary.main" fontWeight="bold">
          {loading === 'pending' ? (
            <CircularProgress color="secondary" size="25px" />
          ) : (
            salesQuantity
          )}
        </Typography>
        <Typography
          display="inline-block"
          color="secondary.main"
          marginLeft={2}
          ml={1}
        >
          Vendas
        </Typography>
      </Box>
    </Box>
  );
};
