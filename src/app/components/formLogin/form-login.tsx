import { useRef } from 'react';
import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLogin, selectorErrorMessage } from 'src/features/auth/authSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schemaLogin = z.object({
  email: z
    .string()
    .email({ message: 'Deve ser um email valido' })
    .min(5, { message: 'O Email é necessario com no minimo 5 caracteres' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no minimo 6 caracteres' }),
});

type InputForm = {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const dispatch = useDispatch();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const errorMessagem = useSelector(selectorErrorMessage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({ resolver: zodResolver(schemaLogin) });
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    const token = captchaRef.current?.getValue();
    captchaRef.current?.reset();
    dispatch(fetchLogin(data));
  };

  return (
    <Box
      maxWidth="550px"
      width="100%"
      bgcolor="#fff"
      paddingX={8}
      paddingY={8}
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, 0.1)"
    >
      <Typography
        variant="h1"
        fontWeight="bold"
        width="100%"
        fontSize={25}
        component="h1"
        textAlign="center"
        color="text.primary"
      >
        Bem vindo(a) ao sistema administrativo.
      </Typography>
      <Typography
        variant="h2"
        width="100%"
        fontSize={18}
        component="h2"
        textAlign="center"
        mt={2}
        color="text.secondary"
      >
        Insira seus dados de acesso abaixo.
      </Typography>
      <Box display="flex" justifyContent="center" mt={2} width="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="standard-basic"
            label="Insira seu e-mail"
            margin="normal"
            defaultValue="admin@paymee.com"
            fullWidth
            {...register('email', { required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            defaultValue="paymee"
            fullWidth
            {...register('password', { required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          {errorMessagem && (
            <Box>
              <Alert severity="error">{errorMessagem}</Alert>
            </Box>
          )}
          <Typography
            variant="h2"
            width="100%"
            fontSize={18}
            component="h2"
            my={2}
            textAlign="center"
            sx={{ textDecoration: 'underline' }}
            color="text.secondary"
          >
            Ops... Esqueci minha senha!
          </Typography>
          <Box display="flex" mb={2} justifyContent="center">
            <ReCAPTCHA
              sitekey={'6LdAXcwpAAAAAKlrb01YZhoo-sfdcZB5ABkG13Z-'}
              ref={captchaRef}
            />
          </Box>
          <Button variant="contained" type="submit" fullWidth>
            <Typography variant="body2" color="white" fontWeight="bold" py={1}>
              Entrar
            </Typography>
          </Button>
        </form>
      </Box>
    </Box>
  );
};
