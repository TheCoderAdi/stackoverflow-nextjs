import User from "@/database/user.model";
import { conntectToDataBase } from "../mongoose";
import console from "console";

export async function getUserById(params: any) {
  try {
    conntectToDataBase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
