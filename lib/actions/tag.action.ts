import User from "@/database/user.model";
import { conntectToDataBase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types.t";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    conntectToDataBase();

    const { userId } = params;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }
    //    TODO: Later will add logic to get top interacted tags
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
      { _id: "3", name: "tag3" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
