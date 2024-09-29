import mongoose from "mongoose";
const carSchema = new mongoose.Schema({
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        reference: 'carProvider',
    },
    brand: {
        type: string,
        required: true,
    },
    model: {
        type: string,
        required: true,
    },
    year: {
        type: string,
        required: true,
    },
    pricePerDay: {
        type: number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
    carType: {
        type: string,
        required: true,
    },
    images: {
        type: string,
        required: true,
    },
    features: {
        type: string,
        required: true,
    },
},
    { timestamps: true, });
    const car = mongoose.model('car',carSchema) ;
    export default car;