import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const nominationSchema = new Schema({

    profile:{
        type: String
    },
    name:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    dob:{
        type: String
    },
    mobile_no:{
        type: String,
        trim: true
    },
    register_no:{
        type: String,
        trim: true
    },
    department:{
        type: String,
        trim: true
    },
    logo:{
        type: String
    },
    party_name:{
        type: String,
        trim: true
    },
    profile_cloudinary_id:{
        type: String,
        trim: true
    },
    logo_cloudinary_id:{
        type: String,
        trim: true
    },
    isCreated: {
        type: Date,
        default: new Date
    }
})


const nomination = mongoose.model("nominations", nominationSchema);

export default nomination;