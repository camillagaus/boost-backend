import { Request, Response, NextFunction } from 'express'

const requestTimeLogger = (req: Request, res: Response, next: NextFunction) => {
    const date = Date.now()
    const formattedDate = new Date(date).toLocaleString('sv-SE')
    console.log('inkomming request at time: ', formattedDate)
    next()
}

export default requestTimeLogger