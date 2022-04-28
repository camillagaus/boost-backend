import { Request, Response, NextFunction } from 'express'

const requestTimeLogger = (req: Request, res: Response, next: NextFunction) => {
    const date = Date.now()
    const formattedDate = new Date(date).toLocaleString('sv-SE')
    console.log('inkomming request at time: ', formattedDate)
    // next säger till att "nu kör vi nästa middleware", annars står requesten bar och snurrar. 
    next()
}

export default requestTimeLogger