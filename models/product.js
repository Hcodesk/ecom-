import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    description : {
        type: String,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'category'
    }
})