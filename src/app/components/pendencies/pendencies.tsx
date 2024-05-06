import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPendencies,
  selectorPendencies,
} from 'src/features/pendencies/pendencies-slice';
import { useEffect, useState } from 'react';
import { dateOptions } from '../date-options/date-options';

export function Pendencies() {
  const pendenciesRate = useSelector(selectorPendencies);
  const [optionDate, setOptionDate] = useState(dateOptions[0].value);
  const lastValue = pendenciesRate.slice(-1)[0];
  const { sales, withdrawals, refunds, payouts } = lastValue || {};
  const loading = useSelector((s) => s.pendencies.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchPendencies({ date: optionDate }));
  }, [dispatch, optionDate]);
  return (
    <Box border="1px solid #e2e2e2" maxWidth="100%" bgcolor="white">
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        borderBottom="1px solid #e2e2e2"
        alignItems="center"
        p={2}
        m={0}
      >
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Pendências
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

      <Box display="flex" width="100%" justifyContent="space-evenly" p={4}>
        <Typography
          variant="h2"
          component="div"
          color="info.main"
          textAlign="center"
        >
          {loading === 'pending' ? (
            <CircularProgress color="info" size="50px" />
          ) : (
            sales
          )}
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
          {loading === 'pending' ? (
            <CircularProgress color="secondary" size="50px" />
          ) : (
            withdrawals
          )}
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
          {loading === 'pending' ? (
            <CircularProgress color="primary" size="50px" />
          ) : (
            refunds
          )}
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
          {loading === 'pending' ? (
            <CircularProgress color="error" size="50px" />
          ) : (
            payouts
          )}
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
}
