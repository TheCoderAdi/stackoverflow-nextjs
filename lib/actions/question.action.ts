"use server";

import { conntectToDataBase } from "../mongoose";

export async function createQuestion(params:any) {
    try {
       conntectToDataBase(); 
    } catch (error) {
        
    }
}