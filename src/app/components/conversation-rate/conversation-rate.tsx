import {
  Box,
  CircularProgress,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate, getDate } from 'src/app/utils/formate-date';
import {
  fetchConversation,
  selectorConversation,
} from 'src/features/conversation/conversation-slice';

export function ConversationRate() {
  const { yesterday: yestarday, sevenDays, thirtyDays } = getDate();

  const dateOptions = [
    { label: 'Dia anterior', value: formatDate(yestarday) },
    { label: '7 dias', value: formatDate(sevenDays) },
    { label: '30 Dias', value: formatDate(thirtyDays) },
  ];
  const conversationRate = useSelector(selectorConversation);
  const lastValue = conversationRate.slice(-1)[0];
  const { value = 0, pending, total } = lastValue || {};
  const [optionDate, setOptionDate] = useState(dateOptions[0].value);
  const loading = useSelector((s) => s.conversations.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(fetchConversation({ date: optionDate }));
  }, [dispatch, optionDate]);

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
        <Typography variant="h3" color="info.dark" fontSize={16}>
          Taxa de conversão
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
      {loading === 'pending' ? (
        <Box display="flex" justifyContent="center" p={4}>
          <Box
            bgcolor="#4160b6"
            borderRadius={50}
            width={200}
            sx={{ position: 'relative', display: 'inline-flex' }}
          >
            <CircularProgress color="primary" size="200px" />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="caption"
                component="div"
                bgcolor="#fff"
                px="84px"
                py="84px"
                textAlign="center"
                borderRadius={50}
                fontSize="20px"
                justifyContent="center"
                boxShadow="0px 0px 7px 4px rgba(0, 0, 0, 0.2)"
              >
                <Typography
                  fontSize={35}
                  color="primary"
                  fontWeight="bold"
                ></Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" p={4}>
          <Box
            sx={{ position: 'relative', display: 'inline-flex' }}
            borderRadius={50}
            bgcolor="#4160b6"
          >
            <CircularProgress
              size={200}
              variant="determinate"
              value={value}
              sx={{ color: '#e77827' }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="div"
                bgcolor="#fff"
                px="35px"
                py="46px"
                textAlign="center"
                borderRadius={50}
                fontSize="20px"
                justifyContent="center"
                boxShadow="0px 0px 7px 4px rgba(0, 0, 0, 0.2)"
              >
                <Typography
                  fontSize={35}
                  variant="caption"
                  color="primary"
                  fontWeight="bold"
                >{`${Math.round(value)}% `}</Typography>
                <Typography color="text.disabled">de conversão</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent="space-between"
        borderTop="1px solid #e2e2e2"
        p={2}
      >
        <Box>
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
          Total de Vendas{' '}
          <Typography
            variant="body2"
            fontWeight="bold"
            color="primary"
            display="inline"
            fontSize={13}
          >
            {loading === 'pending' ? (
              <CircularProgress color="primary" size="10px" />
            ) : (
              total
            )}
          </Typography>
        </Box>
        <Box fontSize={13}>
          <Typography
            width={10}
            height={10}
            bgcolor="#4160b6"
            m={0}
            p={0}
            display="inline-block"
            borderRadius={50}
            mr={1}
            component="b"
            variant="body2"
          />
          Vendas Pendentes{' '}
          <Typography
            variant="body2"
            fontWeight="bold"
            color="secondary"
            display="inline"
            fontSize={13}
          >
            {loading === 'pending' ? (
              <CircularProgress color="secondary" size="10px" />
            ) : (
              pending
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
