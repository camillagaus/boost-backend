export interface Dao<T> {
    getAll: () => Promise<T[]>
    getById: (id: string)  => Promise<T>
    create: (item: T) => Promise<void>
    update: (item: T) => Promise<void>
    delete: (id: string) => Promise<void>
}


// MyFoodStore är av typen Store, och store är av typen FoodItem. 
// Vi byter ut <T> till <FoodItem>