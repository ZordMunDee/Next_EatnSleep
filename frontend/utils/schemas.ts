import { z, ZodSchema } from "zod";

// const profileSchema = z.string().min(2,{message:"ต้องมีอัการมากกว่า 2 ตัวขึ้นไป"})

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "FirstName ต้องมีอักษรมากกว่า 2 ขึ้นไป" }),
  lastName: z
    .string()
    .min(2, { message: "LastName ต้องมีอักษรมากกว่า 2 ขึ้นไป" }),
  userName: z
    .string()
    .min(2, { message: "UserName ต้องมีอักษรมากกว่า 2 ขึ้นไป" }),
});

export const ValiDateWithZod = <T>(
    schema: ZodSchema<T>, 
    data: unknown):T => {

  const result = schema.safeParse(data);
  if (!result.success) {
    //code
    const errors = result.error?.issues.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};