import express from 'express'
import 'dotenv/config'
import { DefaultGroceryService } from './grocery-service'
import { InMemoryGroceryDao } from './in-memory-grocery-dao'

const dao = new InMemoryGroceryDao()
const service = new DefaultGroceryService(dao)

const app = express()
app.use(express.json())
const PORT = 8080

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
  const item = req.body
  await service.create(item)
  console.log('req body: ', req.body)
  res.sendStatus(201)
})

app.delete('/food-items/:id', async(req, res) => {
  const id = req.params.id
  await service.delete(id)
  res.sendStatus(204)
  
})

app.put('/food-items/:id', async(req, res) => {
  const item = req.body
  await service.update(item)
  res.sendStatus(204)
})

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default server
