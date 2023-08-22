import mongoose from 'mongoose';

let isConnected = false;

export const dbConnection = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('Database is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "task-scheduler",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('Database connected')
  } catch (error) {
    console.log(error);
  }
}