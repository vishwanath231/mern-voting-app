import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const adminSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const admin = mongoose.model("admins", adminSchema);

export default admin;