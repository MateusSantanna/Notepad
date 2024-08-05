import { z } from "zod";

export type LoginData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty("Senha é obrigatória"),
});
