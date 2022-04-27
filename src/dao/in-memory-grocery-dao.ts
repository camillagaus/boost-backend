import { Dao } from '../interfaces/dao'
import { FoodItem } from '../models'


export class InMemoryGroceryDao implements Dao<FoodItem>{
    private items: FoodItem[]

    constructor(){
        this.items = []
    }
    async getAll ():Promise<FoodItem[]> {
        return this.items
    }
    async getById (id: string):Promise<FoodItem> {
        return this.items.find(x => x.id == id)
    }
    async create (item: FoodItem):Promise<void> {
        this.items.push(item)
    }
    async delete (id: string):Promise<void> {
        this.items  = this.items.filter(x => x.id != id)    
    }
    async update (item: FoodItem):Promise<void> {
        this.items = this.items.filter(x => x.id != item.id)
        this.items.push(item)
    }
}