import mongoDB from './db/connection';
import dotenv from 'dotenv';  
import express from 'express';
import staffRoutes from './routes/staff.routes';
dotenv.config();
mongoDB(); 

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/api/staff", staffRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
