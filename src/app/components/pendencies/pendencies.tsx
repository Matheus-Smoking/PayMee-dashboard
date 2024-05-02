import { Box, MenuItem, Select, Typography } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Pendencies = () => {
  return (
    <Box border="1px solid #e2e2e2" maxWidth="100%" bgcolor="white">
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        p={2}
        m={0}
      >
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Pendências
        </Typography>
        <Select
          labelId="selected-days"
          id="selected-days"
          value={10}
          onChange={() => undefined}
          label="Dias"
          variant="standard"
        >
          <MenuItem value={10}>Dia anterior</MenuItem>
          <MenuItem value={20}>7 dias</MenuItem>
          <MenuItem value={30}>30 dias</MenuItem>
        </Select>
      </Box>

      <Box display="flex" width="100%" justifyContent="space-evenly" p={4}>
        <Typography
          variant="h2"
          component="div"
          color="info.main"
          textAlign="center"
        >
          12
          <Typography
            variant="body1"
            color="text.secondary"
            display="flex"
            alignItems="center"
          >
            Vendas
            <CallMadeIcon fontSize="1" />
          </Typography>
        </Typography>
        <Typography
          variant="h2"
          component="div"
          color="secondary"
          textAlign="center"
        >
          02
          <Typography
            variant="body1"
            color="text.secondary"
            display="flex"
            alignItems="center"
          >
            Saques
            <CallMadeIcon fontSize="1" />
          </Typography>
        </Typography>
        <Typography
          variant="h2"
          component="div"
          color="primary"
          textAlign="center"
        >
          35
          <Typography
            variant="body1"
            color="text.secondary"
            display="flex"
            alignItems="center"
          >
            Reembolsos
            <CallMadeIcon fontSize="1" />
          </Typography>
        </Typography>
        <Typography variant="h2" component="div" color="red" textAlign="center">
          47
          <Typography
            variant="body1"
            color="text.secondary"
            display="flex"
            alignItems="center"
          >
            Payouts
            <CallMadeIcon fontSize="1" />
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Pendencies;
