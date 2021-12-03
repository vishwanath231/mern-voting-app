import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const votingSchema = new Schema({

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
    voted: {
        type: String,
        trim: true,
        required: [true, "Vote selection is required!"]
    },
    isPosted: {
        type: Date,
        default: Date.now
    }
})

const vote = mongoose.model("votes", votingSchema);

export default vote;