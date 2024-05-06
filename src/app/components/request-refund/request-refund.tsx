import { Box, Button, TextField, Typography } from '@mui/material';

export function RequestRefund() {
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <TextField id="standard-basic" fullWidth label="TID da venda" />
          <Button
            variant="contained"
            type="submit"
            sx={{ padding: '12px 0', marginLeft: '20px' }}
            fullWidth
          >
            <Typography
              variant="body2"
              color="white"
              fontWeight="bold"
              fontSize={15}
            >
              Entrar
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
