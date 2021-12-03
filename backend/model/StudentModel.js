import mongoose from "mongoose";

const Schema = mongoose.Schema;


const studentSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: [true, "Username is required!"]
    },
    register_no: {
        type: String,
        trim: true,
        required: [true, "Register number is required!"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required!"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required!"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


const list = mongoose.model("students" , studentSchema);

export default list;
