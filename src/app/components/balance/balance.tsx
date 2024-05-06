import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDashboard,
  selectorDashboard,
} from 'src/features/dashboard/dashboard-slice';
import { useEffect, useState } from 'react';
import { BorderLinearProgress } from './borderLinearStyle';

export function Balance() {
  const dispatch = useDispatch();
  const dashboardRate = useSelector(selectorDashboard);
  const [progressValue, setProgressValue] = useState(0);
  const loading = useSelector((s) => s.dashboard.loading);

  const { balanceAvailable, limit, totalBalance } =
    dashboardRate[0]?.balance || {};

  useEffect(() => {
    dispatch<any>(fetchDashboard());
    setProgressValue(parseFloat(totalBalance) % parseFloat(limit));
  }, [dispatch, limit, totalBalance]);

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
          Saldo disponivel
        </Typography>
      </Box>
      <Box p={2}>
        <Typography
          variant="h4"
          display="flex"
          color="secondary"
          mb={2}
          alignItems="center"
        >
          <Typography color="text.secondary" mr={1} fontSize={29}>
            R$
          </Typography>{' '}
          {loading === 'pending' ? (
            <CircularProgress color="secondary" size="25px" />
          ) : (
            balanceAvailable
          )}
        </Typography>
        <BorderLinearProgress variant="determinate" value={progressValue} />
        <Box display="flex" mt={2}>
          <Box>
            <Box color="text.secondary" fontSize={13}>
              <Typography
                width={10}
                height={10}
                bgcolor="#e77827"
                m={0}
                p={0}
                display="inline-block"
                borderRadius={50}
                mr={1}
                component="span"
              />
              <Typography display="inline">Limite</Typography>
            </Box>
            <Box fontWeight="bold">
              {' '}
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={15}
                display="inline"
              >
                R$
              </Typography>{' '}
              {loading === 'pending' ? (
                <CircularProgress color="primary" size="15px" />
              ) : (
                limit
              )}
            </Box>
          </Box>
          <Box ml={4}>
            <Box color="text.secondary" fontSize={13}>
              <Typography
                width={10}
                height={10}
                bgcolor="#1eba5c"
                m={0}
                p={0}
                display="inline-block"
                borderRadius={50}
                mr={1}
                component="span"
              />
              <Typography display="inline">Saldo Total</Typography>
            </Box>
            <Box fontWeight="bold">
              {' '}
              <Typography
                variant="body1"
                color="text.secondary"
                fontSize={15}
                display="inline"
              >
                R$
              </Typography>{' '}
              {loading === 'pending' ? (
                <CircularProgress color="info" size="15px" />
              ) : (
                totalBalance
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
