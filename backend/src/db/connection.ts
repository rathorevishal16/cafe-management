import mongoose from 'mongoose'; 

    const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/cafe-management').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
} 

export default mongoDB;