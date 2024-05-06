import * as z from 'zod';

export const schemaLogin = z.object({
  email: z
    .string()
    .email({ message: 'Deve ser um email valido' })
    .min(5, { message: 'O Email é necessario com no minimo 5 caracteres' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no minimo 6 caracteres' }),
});
