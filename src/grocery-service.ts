import { Dao } from './interfaces/dao'
import { FoodItem } from './models'
import { GroceryService } from './interfaces'

export class DefaultGroceryService implements GroceryService {
    private groceryDao: Dao<FoodItem>
    constructor(dao: Dao<FoodItem>){
        this.groceryDao = dao
    }
    async getAll ():Promise<FoodItem[]> {
        return this.groceryDao.getAll()
    }
    async getById (id: string):Promise<FoodItem> {
        return await this.groceryDao.getById(id)
    }
    async create (item: FoodItem):Promise<void> {
        await this.groceryDao.create(item)
    }
    async delete (id: string):Promise<void> {
        await this.groceryDao.delete(id)
    }
    async update (item: FoodItem):Promise<void> {
        await this.groceryDao.update(item)
    }
}