"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateField = LoginSchema.safeParse(values);

  if (!validateField.success) {
    return { error: "Invalied fields" };
  }

  return { success: "Email sent" };
};
