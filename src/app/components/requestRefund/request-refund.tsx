import { Box, Typography } from '@mui/material';

const RequestRefund = () => {
  return (
    <Box border="1px solid #e2e2e2" maxWidth="100%" bgcolor="white" mb={20}>
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        p={2}
        m={0}
      >
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Solicitar Reembolso
        </Typography>
      </Box>
      <Box p={2}>
        <Typography variant="body1">
          Por favor, informe o TID da venda
        </Typography>
      </Box>
    </Box>
  );
};

export default RequestRefund;
