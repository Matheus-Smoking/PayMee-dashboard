import { Box, Typography } from '@mui/material';

export const SalesQuantity = () => {
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
      <Box display="flex" justifyContent="center" p={4}>
        <Typography>
          368<Typography display="inline-block">Vendas</Typography>
        </Typography>
      </Box>
    </Box>
  );
};
