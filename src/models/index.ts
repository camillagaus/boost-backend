import mongoose from 'mongoose'


type FoodItem = {
    id: string
    name: string
    price: string,
    description: string
    image: string
    allergies: string[]
    vegetarian: boolean
}


// schema är ett object som hjälper till att läsa modeller. 
const foodItemSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    description: String,
    image: String,
    vegetarian: Boolean,
    allergies: [String]
})

export { foodItemSchema, FoodItem }

