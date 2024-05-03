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
import { useDispatch, useSelector } from 'react-redux';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  fetchOperation,
  selectorOperations,
} from 'src/features/operation/operation-slice';
import { formatDate, getDate } from 'src/app/utils/formate-date';

const { yestarday, sevenDays, thirtyDays } = getDate();

const dateOptions = [
  { label: 'Dia anterior', value: formatDate(yestarday) },
  { label: '7 dias', value: formatDate(sevenDays) },
  { label: '30 Dias', value: formatDate(thirtyDays) },
];

export default function Operations() {
  const [optionDate, setOptionDate] = React.useState(dateOptions[0].value);
  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();
  const operations = useSelector(selectorOperations);
  React.useEffect(() => {
    dispatch(fetchOperation({ date: optionDate, sort: sort }));
  }, [dispatch, optionDate, sort]);

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
          value={optionDate}
          onChange={(event) => setOptionDate(event.target.value)}
          label="Dias"
          variant="standard"
        >
          {dateOptions.map(({ label, value }) => {
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow sx={{ background: '#eaecef' }}>
              <TableCell
                sx={{ fontSize: '13px' }}
                onClick={() => setSort('refund')}
              >
                Operação
              </TableCell>
              <TableCell
                sx={{ fontSize: '12px' }}
                onClick={() => setSort('TID')}
              >
                TID
              </TableCell>
              <TableCell
                sx={{ fontSize: '12px' }}
                onClick={() => setSort('date')}
              >
                Data
              </TableCell>
              <TableCell
                sx={{ fontSize: '12px' }}
                onClick={() => setSort('value')}
              >
                Valor Bruto
              </TableCell>
              <TableCell
                sx={{ fontSize: '12px' }}
                onClick={() => setSort('rate')}
              >
                Taxa de Serviço
              </TableCell>
              <TableCell
                sx={{ fontSize: '12px' }}
                onClick={() => setSort('liquid')}
              >
                Valor Liquido
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {operations?.map(({ TID, date, rate, refund, value, liquid }) => (
              <TableRow
                key={TID}
                sx={{
                  borderLeft: refund
                    ? '3px solid #db9e00'
                    : '3px solid #1eba5c',
                  borderBottom: '2px dashed #eaecef',
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ borderRight: '1px solid #e2e2e2' }}
                >
                  <Typography
                    bgcolor={refund ? '#fff4cc' : '#e9f9ef'}
                    borderRadius={2}
                    px={8}
                    py={1}
                    color={refund ? 'warning.main' : 'info.main'}
                    fontSize={14}
                    textAlign="center"
                  >
                    {refund ? 'Reembolso' : 'Venda'}
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderRight: '1px solid #e2e2e2' }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    fontSize={12}
                  >
                    TID
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.dark"
                    fontSize={12}
                    textAlign="left"
                  >
                    {TID}
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
                    {date}
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
                  <Typography variant="body1" fontSize={12}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={10}
                    >
                      R$
                    </Typography>{' '}
                    {value}
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
                  <Typography variant="body1" fontSize={12}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={10}
                    >
                      R$
                    </Typography>{' '}
                    {rate}
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
                  <Typography variant="body1" fontSize={12}>
                    <Typography
                      color="text.secondary"
                      display="inline-block"
                      fontSize={10}
                    >
                      R$
                    </Typography>{' '}
                    {liquid}
                  </Typography>
                </TableCell>
                <TableCell>
                  {refund ? (
                    <ArrowDownwardIcon fontSize="small" color="warning" />
                  ) : (
                    <ArrowUpwardIcon fontSize="small" color="info" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
