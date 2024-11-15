import mongoose from "mongoose";

export async function connect(){
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connections.[0].name}`);
    } catch (e) {
        console.log(e);
    }
}
