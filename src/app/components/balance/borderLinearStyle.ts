import styled from '@emotion/styled';
import LinearProgress, {
    linearProgressClasses,
  } from '@mui/material/LinearProgress';

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
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