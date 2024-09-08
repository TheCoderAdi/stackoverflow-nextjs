"use server";

import Question from "@/database/question.model";
import { connectToDataBase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types.t";
import Interaction from "@/database/interaction.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    connectToDataBase();

    const { questionId, userId } = params;

    await Question.findByIdAndUpdate(questionId, {
      $inc: { views: 1 },
    });

    if (userId) {
      const existingInteraction = await Interaction.findOne({
        user: userId,
        question: questionId,
        action: "view",
      });
      if (existingInteraction) {
        return console.log("Interaction already exists");
      }

      await Interaction.create({
        user: userId,
        question: questionId,
        action: "view",
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
