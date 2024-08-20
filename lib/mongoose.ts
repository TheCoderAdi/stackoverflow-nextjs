import mongoose from 'mongoose'

let isConntected: boolean = false;

export const conntectToDataBase = async () => {
    mongoose.set('strict',true);

    if(!process.env.MONGO_URI) {
        return console.log("MISSING MONGO_URI");
    }

    if(isConntected) {
        return console.log("ALREADY CONNECTED");
    }
    
    try {
       await mongoose.connect(process.env.MONGO_URI,{
        dbName:"stackoverclone",
       }); 
       isConntected = true;

       return console.log("CONNECTED TO DATABASE");
    } catch (error) {
       return console.log("ERROR CONNECTING TO DATABASE",error);
    }
}