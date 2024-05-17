"use server";
import { ResigterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof ResigterSchema>) => {
  const validateField = ResigterSchema.safeParse(values);

  if (!validateField.success) {
    return { error: "Invalied fields" };
  }

  return { success: "Email sent" };
};
