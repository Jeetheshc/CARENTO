import mongoose from "mongoose";
const carProvider = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: pageYOffset,
    },
    cars: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'car',
    }],

}, { timestamps: true, })
const provider = mongoose.model('provider',carProvider);
export default provider;