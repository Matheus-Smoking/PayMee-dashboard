import { Box } from '@mui/material';
import { cellPhonePix, logo } from '../../assets';
import { FormLogin } from '../components/form-login/form-login';

export default function Login() {
  return (
    <Box
      component="section"
      maxWidth="1200px"
      width="100%"
      margin="0 auto"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
    >
      <Box component="div" mr={8} mt={12}>
        <Box
          component="div"
          mb={8}
          display="flex"
          justifyContent="center"
          maxHeight="100%"
        >
          <figure>
            <img src={logo} alt="logo paymee" />
          </figure>
        </Box>
        <FormLogin />
      </Box>
      <img src={cellPhonePix} alt="Celular Pix" />
    </Box>
  );
}
