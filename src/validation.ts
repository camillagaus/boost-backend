import Joi from 'joi'

// "id": "2",
// "name": "Camilla",
// "price": "20",
// "description": "xxx",
// "image": "xxx",
// "vegetarian": true,
// "allergies": [],

const foodItemSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    id: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    vegetarian: Joi.boolean().required(),
    allergies: Joi.array().items(Joi.string()).required()
})

export { foodItemSchema } 