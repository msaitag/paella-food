import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://msaitag:m1szz2apc@cluster0.t9psa68.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}