"use server";

import { profileSchema, ValiDateWithZod } from "@/utils/schemas";

const rendererror = (error: unknown): { message :string } => {
    //code body
    return {
        message: error instanceof Error ? error.message : 'An Error!!'
    }
}; 

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
    return rendererror(error)
  }

  return { message: "Create Profile Success!!!" };
};
