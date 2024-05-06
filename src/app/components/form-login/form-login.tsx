import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLogin, selectorErrorMessage } from 'src/features/auth/auth-slice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schemaLogin } from './schema-login';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type InputForm = {
  email: string;
  password: string;
};

export function FormLogin() {
  const [token, setToken] = useState<string | undefined | null>();
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const errorMessagem = useSelector(selectorErrorMessage);
  const loading = useSelector((s) => s.auth.loading);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<InputForm>({
    resolver: zodResolver(schemaLogin),
    mode: 'onTouched',
  });
  const onSubmit: SubmitHandler<InputForm> = async (data) => {
    if (token) {
      dispatch<any>(fetchLogin({ ...data, token }));

      return;
    }
  };

  useEffect(() => {
    const checkFormFilled = () => {
      const isFilled = Object.values(getValues()).every(
        (value) => value !== ''
      );
      setIsFormFilled(isFilled);
    };
    watch(checkFormFilled);
  }, [getValues, watch]);

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
            fullWidth
            {...register('email', { required: true })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            fullWidth
            {...register('password', { required: true })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="start"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
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
              onChange={() => {
                const token = captchaRef.current?.getValue();
                setToken(token);
              }}
              sitekey={'6LdAXcwpAAAAAKlrb01YZhoo-sfdcZB5ABkG13Z-'}
              ref={captchaRef}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={!(isValid && isFormFilled && token)}
            sx={{ padding: '10px 0' }}
          >
            {loading === 'pending' ? (
              <CircularProgress sx={{ color: '#fff' }} size="30px" />
            ) : (
              <Typography
                variant="body2"
                color="white"
                fontWeight="bold"
                fontSize={15}
                py={0.5}
              >
                Entrar
              </Typography>
            )}
          </Button>
        </form>
      </Box>
    </Box>
  );
}
