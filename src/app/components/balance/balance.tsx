import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#e77827',
  },
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#1eba5c',
  },
}));

const Balance = () => {
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
        <Typography variant="body1" color="text.secondary" display="flex">
          Atual
          <KeyboardArrowDownIcon />
        </Typography>
      </Box>
      <Box p={2}>
        <Typography variant="h4" display="flex" color="secondary" mb={2}>
          <Typography color="text.secondary" mr={1}>
            R$
          </Typography>{' '}
          15.739,91
        </Typography>
        <BorderLinearProgress variant="determinate" value={20} />
        <Box display="flex" mt={2}>
          <Box>
            <Typography variant="body2" color="text.secondary" fontSize={13}>
              <Box
                width={10}
                height={10}
                bgcolor="#e77827"
                m={0}
                p={0}
                display="inline-block"
                borderRadius={50}
                mr={1}
                component="b"
              />
              <Typography display="inline">Limite</Typography>
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {' '}
              <Typography color="text.secondary" fontSize={15} display="inline">
                R$
              </Typography>{' '}
              350,00
            </Typography>
          </Box>
          <Box ml={4}>
            <Typography variant="body2" color="text.secondary" fontSize={13}>
              <Box
                width={10}
                height={10}
                bgcolor="#1eba5c"
                m={0}
                p={0}
                display="inline-block"
                borderRadius={50}
                mr={1}
                component="b"
              />
              <Typography display="inline">Saldo Total</Typography>
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              {' '}
              <Typography color="text.secondary" fontSize={15} display="inline">
                R$
              </Typography>{' '}
              28.800,00
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
