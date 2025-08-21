import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config({ path: "./config.env" });

export const  dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HospitalManagement"
    })
    .then(()=>{
        console.log("Connected to database!")
    })
    .catch(()=>{
        console.log("Error on connecting to database")
    });
}
