import { Box } from '@mui/material';
import { cellPhonePix, logo } from '../../assets';
import { FormLogin } from '../components/formLogin/form-login';

const Login = () => {
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
        <Box component="div" mb={8} display="flex" justifyContent="center">
          <img src={logo} alt="logo paymee" />
        </Box>
        <FormLogin />
      </Box>
      <img src={cellPhonePix} alt="Celular Pix" />
    </Box>
  );
};

export default Login;
