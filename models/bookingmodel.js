import mongoose from "mongoose";
const bookingSchema = new mongoose.schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'car'
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'provider',
    },


});
const booking = mongoose.model('booking', bookingSchema);
export default booking;