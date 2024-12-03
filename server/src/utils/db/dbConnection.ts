import mongoose from "mongoose";
import { dbUrl } from "../envVariables";

export async function dbConnection() {
    try {
        if(!process.env.DB_URL) throw new Error('DB url not working check .env')
        await mongoose.connect(dbUrl)
        return true
    } catch (err) {
        return false
    }
}