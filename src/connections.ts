import mongoose from 'mongoose'

// här använder vi Promise<void> där vi säger till typescript att det är det 
// vi väntar på 
const connectToMongoDB = async (): Promise<void> => {
    mongoose.connect('mongodb+srv://camilla:boost-test@cluster0.5if3o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

export { connectToMongoDB }

