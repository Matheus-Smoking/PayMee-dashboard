import * as React from 'react';

import {
  Box,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { fetchDash, selectorDashboard } from 'src/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const rows = [0, 1, 2, 3];

export default function Operations() {
  const [isDashboard, setDashboard] = React.useState([]);
  const dispatch = useDispatch();
  const dashboard = useSelector(selectorDashboard);
  React.useEffect(() => {
    dispatch(fetchDash());
    setDashboard(dashboard);
    console.log('dashboard:', isDashboard);
  }, []);

  return (
    <Box border="1px solid #e2e2e2" maxWidth="100%" bgcolor="white">
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        p={2}
        m={0}
        alignItems="center"
      >
        <Typography color="info.dark" fontSize={16}>
          Ultimas Operações Processadas
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ background: '#eaecef' }}>
              <TableCell sx={{ fontSize: '13px' }}>Operação</TableCell>
              <TableCell sx={{ fontSize: '13px' }}>TID</TableCell>
              <TableCell sx={{ fontSize: '13px' }}>Data</TableCell>
              <TableCell sx={{ fontSize: '13px' }}>Valor Bruto</TableCell>
              <TableCell sx={{ fontSize: '13px' }}>Taxa de Serviço</TableCell>
              <TableCell sx={{ fontSize: '13px' }}>Valor Liquido</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row}
                sx={{
                  borderLeft: '3px solid #1eba5c',
                  borderBottom: '2px dashed #eaecef',
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderRight: '1px solid #e2e2e2' }}
                >
                  <Typography
                    bgcolor="#e9f9ef"
                    borderRadius={2}
                    px={8}
                    py={1}
                    color="info.main"
                    fontSize={14}
                    textAlign="center"
                  >
                    Venda
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={14}
                  >
                    TID
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.dark"
                    fontSize={14}
                    textAlign="left"
                  >
                    0072469813
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={12}
                  >
                    15:20:20
                  </Typography>
                  <Typography variant="body1" fontSize={14}>
                    19/12/22
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={12}
                  >
                    Valor Bruto
                  </Typography>
                  <Typography variant="body1" fontSize={13}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={12}
                    >
                      R$
                    </Typography>{' '}
                    8.25,00
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={12}
                  >
                    Taxa de Serviço
                  </Typography>
                  <Typography variant="body1" fontSize={14}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={12}
                    >
                      R$
                    </Typography>{' '}
                    125,00
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={12}
                  >
                    Valor Liquido
                  </Typography>
                  <Typography variant="body1" fontSize={14}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={12}
                    >
                      R$
                    </Typography>{' '}
                    1.670,00
                  </Typography>
                </TableCell>
                <TableCell>te</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

    // <Box
    //   display="flex"
    //   justifyContent="space-between"
    //   borderBottom="1px dashed #ccc"
    // >
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    //     <Typography
    //       bgcolor="#ccc"
    //       borderRadius={2}
    //       px={8}
    //       py={1}
    //       color="primary"
    //       fontSize={15}
    //     >
    //       Venda
    //     </Typography>
    //   </Box>
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    //     <Typography variant="body1" fontSize={15}>
    //       TID
    //     </Typography>
    //     <Typography variant="body1" fontSize={15}>
    //       {item.TID}
    //     </Typography>
    //   </Box>
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    //     <Typography variant="body1" fontSize={15}>
    //       15:20:20
    //     </Typography>
    //     <Typography variant="body1" fontSize={15}>
    //       {item.date}
    //     </Typography>
    //   </Box>
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    // <Typography variant="body1" fontSize={15}>
    //   Valor Bruto
    // </Typography>
    // <Typography variant="body1" fontSize={15}>
    //   {item.value}
    // </Typography>
    //   </Box>
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    // <Typography variant="body1" fontSize={15}>
    //   Taxa de Serviço
    // </Typography>
    // <Typography variant="body1" fontSize={15}>
    //   {item.rate}
    // </Typography>
    //   </Box>
    //   <Box component="div" px={2} my={1} borderRight="1px solid #ccc">
    // <Typography variant="body1" fontSize={15}>
    //   Valor Liquido
    // </Typography>
    // <Typography variant="body1" fontSize={15}>
    //   R$ 1.670,00
    // </Typography>
    //   </Box>
    // </Box>
  );
}
