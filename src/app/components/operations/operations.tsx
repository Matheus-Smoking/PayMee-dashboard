import * as React from 'react';
import {
  Box,
  CircularProgress,
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
import { formatDateShorty } from 'src/app/utils/formate-date';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { dateOptions } from '../date-options/date-options';

export function Operations() {
  const [optionDate, setOptionDate] = React.useState(dateOptions[0].value);
  const [sortRefund, setSortRefund] = React.useState<'asc' | 'desc'>('asc');
  const [sortTID, setSortTID] = React.useState<'asc' | 'desc'>('asc');
  const [sortValue, setSortValue] = React.useState<'asc' | 'desc'>('asc');
  const [sortDate, setSortDate] = React.useState<'asc' | 'desc'>('asc');
  const [sortRate, setSortRate] = React.useState<'asc' | 'desc'>('asc');
  const [sortLiquid, setSortLiquid] = React.useState<'asc' | 'desc'>('asc');
  const [sort, setSort] = React.useState('');
  const dispatch = useDispatch();
  const operations = useSelector(selectorOperations);
  const loading = useSelector((s) => s.operations.loading);

  React.useEffect(() => {
    dispatch<any>(fetchOperation({ date: optionDate, sort: sort }));
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
                size="small"
                sortDirection={sortRefund}
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '193px',
                }}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('refund&_order=asc');
                    setSortRefund('desc');
                    return;
                  }
                  setSort('refund&_order=desc');
                  setSortRefund('asc');
                }}
              >
                Operação
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    marginTop: '1px',
                    color: '#989898',
                    transform:
                      sortRefund === 'desc'
                        ? 'rotate(0rad)'
                        : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '90px',
                }}
                sortDirection={sortTID}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('TID&_order=asc');
                    setSortTID('desc');
                    return;
                  }
                  setSort('TID&_order=desc');
                  setSortTID('asc');
                }}
              >
                TID
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    color: '#989898',
                    transform:
                      sortTID === 'desc' ? 'rotate(0rad)' : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '90px',
                }}
                sortDirection={sortDate}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('date&_order=asc');
                    setSortDate('desc');
                    return;
                  }
                  setSort('date&_order=desc');
                  setSortDate('asc');
                }}
              >
                Data
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    marginTop: '1px',
                    color: '#989898',
                    transform:
                      sortDate === 'desc' ? 'rotate(0rad)' : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '105px',
                }}
                sortDirection={sortValue}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('value&_order=asc');
                    setSortValue('desc');
                    return;
                  }
                  setSort('value&_order=desc');
                  setSortValue('asc');
                }}
              >
                Valor Bruto
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    color: '#989898',
                    transform:
                      sortValue === 'desc' ? 'rotate(0rad)' : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '132px',
                }}
                sortDirection={sortRate}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('rate&_order=asc');
                    setSortRate('desc');
                    return;
                  }
                  setSort('rate&_order=desc');
                  setSortRate('asc');
                }}
              >
                Taxa de Serviço
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    color: '#989898',
                    transform:
                      sortRate === 'desc' ? 'rotate(0rad)' : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  minWidth: '110px',
                }}
                sortDirection={sortLiquid}
                onClick={(e) => {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  if (e?.target?.ariaSort === 'ascending') {
                    setSort('liquid&_order=asc');
                    setSortLiquid('desc');
                    return;
                  }
                  setSort('liquid&_order=desc');
                  setSortLiquid('asc');
                }}
              >
                Valor Liquido
                <KeyboardArrowDownIcon
                  fontSize="5px"
                  sx={{
                    display: 'inline-block',
                    marginTop: '1px',
                    color: '#989898',
                    transform:
                      sortLiquid === 'desc'
                        ? 'rotate(0rad)'
                        : 'rotate(84.8rad)',
                  }}
                />
              </TableCell>
              <TableCell
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                  width: '52px',
                }}
              ></TableCell>
            </TableRow>
          </TableHead>
          {loading === 'pending' ? (
            <Box
              display="flex"
              m={4}
              width="100%"
              justifyContent="center"
              position="relative"
              pb={4}
            >
              <TableBody
                sx={{ width: '100%', position: 'absolute', left: '175%' }}
              >
                <TableRow>
                  <CircularProgress color="primary" size="30px" />
                </TableRow>
              </TableBody>
            </Box>
          ) : (
            <TableBody>
              {operations?.map(
                ({ TID, date, rate, refund, value, liquid }, index) => (
                  <TableRow
                    key={index}
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
                        px={6}
                        py={1}
                        color={refund ? 'warning.main' : 'info.main'}
                        fontSize={13}
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
                      <Typography variant="body1" fontSize={12}>
                        {formatDateShorty(date)}
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
                )
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
}
