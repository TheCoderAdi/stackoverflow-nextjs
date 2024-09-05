import Answer from "@/database/answer.model";
import { conntectToDataBase } from "../mongoose";
import { CreateAnswerParams } from "./shared.types.t";
import Question from "@/database/question.model";
import { revalidatePath } from "next/cache";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    conntectToDataBase();

    const { author, content, path, question } = params;
    const newAnswer = new Answer({
      content,
      author,
      question,
    });

    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
