"use server";

import { profileSchema, ValiDateWithZod } from "@/utils/schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = ValiDateWithZod(profileSchema, rawData);
    console.log("valedated", validateField);

  } catch (error) {
    console.log(error);
    return { message: error.message || 'An error server' }
  }

  return { message: "Create Profile Success!!!" };
};
