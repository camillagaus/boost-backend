import mongoose from 'mongoose'

// här använder vi Promise<void> där vi säger till typescript att det är det 
// vi väntar på 
const connectToMongoDB = async (): Promise<void> => {
    mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
}

export { connectToMongoDB }

