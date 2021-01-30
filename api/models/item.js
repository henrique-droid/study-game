import mongoose from 'mongoose';

const { Schema } = mongoose;

const itemSchema = new Schema({
    title: String,
    description: String,
    image: { data: Buffer, contentType: String },
    rewards: {
        hp: Number,
        mana: Number,
        exp: Number,
        coins: Number
    }
})

const Item = mongoose.model('Item', itemSchema);

export default Item;