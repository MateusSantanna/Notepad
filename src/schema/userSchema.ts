import { z } from "zod";

export type createUserData = z.infer<typeof userSchema>;

export const userSchema = z
  .object({
    name: z
      .string()
      .min(3, "A senha deve ter no mínimo 3 caracteres")
      .nonempty("Nome Obrigatório"),
    email: z.string().email().nonempty("Email Obrigatório"),
    password: z
      .string()
      .min(3, `A senha deve ter no mínimo 3 caracteres`)
      .nonempty("Senha é obrigatória"),
    confirmPassword: z.string().nonempty("Confirmação de Senha é obrigatória"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
