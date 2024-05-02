import { Box, Typography } from '@mui/material';

export const SalesValue = () => {
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
      <Box display="flex" justifyContent="center" p={4} bgcolor="#e9f9ef">
        <Typography>
          R$
          <Typography
            display="inline-block"
            color="info.main"
            ml={1}
            fontWeight="bold"
          >
            2.623.492,97
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
