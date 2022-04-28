import express from 'express'
import 'dotenv/config'
import { DefaultGroceryService } from './grocery-service'
import { InMemoryGroceryDao } from './dao/in-memory-grocery-dao'
import { connectToMongoDB } from './connections'
import { MongoDbDao } from './dao'
import { foodItemSchema } from './validation'
import { FoodItem } from './models'
import timeLogger from './middleware'

const initServer = async () => {

  const dao = new MongoDbDao()
  const service = new DefaultGroceryService(dao)

  const app = express()
  // app.use körs varje gång en request görs. 
  // vi vill betrakta bodyn som json. 
  app.use(express.json())
  app.use(timeLogger)
  const PORT = 8080
  await connectToMongoDB() 

  // NEDANFÖR ÄR VÅRA CONTROLLERS. 
  app.get('/food-items', async(req, res) => {
    const items = await service.getAll()
    res.send(items)
  })

  app.get('/food-items/:id', async(req, res) => {
    const item = await service.getById(req.params.id)
    console.log('item: ', item)
    res.send(item)
  })

  app.post('/food-items', async(req: express.Request, res: express.Response) => {
    try {

      const item: FoodItem = await foodItemSchema.validateAsync(req.body)
      await service.create(item)
      console.log('req body: ', req.body) 
      res.sendStatus(201)

    } catch (error) {
      res.status(422).send(error.message)
    }
   
  })

  app.delete('/food-items/:id', async(req, res) => {
    const id = req.params.id
    await service.delete(id)
    res.sendStatus(204)
    
  })

  app.put('/food-items/:id', async(req, res) => {
    try {
      const item: FoodItem = await foodItemSchema.validateAsync(req.body)
      await service.update(item)
      res.sendStatus(204)
    } catch (error) {
      res.status(422).send(error.message)
    }
    
  })

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

}


initServer()
