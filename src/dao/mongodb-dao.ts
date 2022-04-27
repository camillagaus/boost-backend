import { Dao } from '../interfaces'
import { FoodItem, foodItemSchema } from '../models'
import mongoose, { Model } from 'mongoose'

//Detta ger ett löfte till typescript att vi ska implementera 
// fuktionerna Dao FoodItem (vi ska returnera specifika saker)
export class MongoDbDao implements Dao<FoodItem> {
    // classen ska ha en privat variabel som heter Model
    private model: Model<FoodItem>

    // contructorn ekexveras när vi skapar en instans av denna klass.
    // constructorn triggas igång av New keywordet. 
    constructor() {
        // vi tilldelar ett väerde till model variabel. Vi utvinner en
        // mongoose model med hjälp av vårat schema. 
        this.model = mongoose.model('FoodItem', foodItemSchema)
    }

    private fromMongoDbToFoodItem(source: any):FoodItem {
        return {
            id: source.id,
            name: source.name,
            price: source.price,
            description: source.description,
            vegetarian: source.vegetarian,
            image: source.image,
            allergies: source.allergies
        }
    }

    async getAll ():Promise<FoodItem[]> {
        const items = await this.model.find()
        return items.map(item => this.fromMongoDbToFoodItem(item))
    }
    async getById (id: string): Promise<FoodItem> {
        const item = await this.model.findOne({ id: id})
        return this.fromMongoDbToFoodItem(item) 
    }
    async create (item: FoodItem):Promise<void> {
        await this.model.create(item)
        
    }
    async update (item: FoodItem):Promise<void> {
        await this.model.updateOne({id: item.id}, item)
    }
    async delete (id: string): Promise<void> {
        await this.model.deleteOne({id: id})
    }
}

