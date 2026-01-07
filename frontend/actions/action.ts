"use server";

import { profileSchema, ValiDateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import  db from "@/utils/db"
import { redirect } from "next/navigation";


const getAuthUser = async () => {
  //code body
  const user = await currentUser()
  
  if (!user) {
    throw new Error("You must login to create a profile!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect('/profile/create')
  return user;
}


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
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);
    const validateField = ValiDateWithZod(profileSchema, rawData);
    console.log("valedated", validateField);
    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validateField
      }
    })
    const clinet = await clerkClient()
    await clinet.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true
      }
    })
    //return { message: "Create Profile Success!!!" };
  } catch (error) {
    // console.log(error);
    return rendererror(error)
  }
  redirect('/')

};
