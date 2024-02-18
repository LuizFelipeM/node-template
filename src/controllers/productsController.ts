import { Request, Response } from "express"


const products = [
  { id: 1, name: "Bread", price: 5.00 },
  { id: 2, name: "Soda", price: 2.50 },
  { id: 3, name: "Fish", price: 15.00 },
]

export const productsController = {
  async all(_: Request, res: Response): Promise<Response> {
    try {
      return res.json(products)
    } catch (error) {
      return res.status(400).json({ error })
    }
  },

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      return res.json(products.find(p => p.id === Number(id)))
    } catch (error) {
      return res.status(400).json({ error })
    }
  },

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const product = { ...req.body, id: Math.max(...products.map(p => p.id)) + 1 }
      products.push(product)
      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({ error })
    }
  },

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const idx = products.findIndex(p => p.id === Number(id))

      products[idx] = { ...products[idx], ...req.body, id: Number(id) }

      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({ error })
    }
  },

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const idx = products.findIndex(p => p.id === Number(id))
      products.splice(idx, 1)

      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}