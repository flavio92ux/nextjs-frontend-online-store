import { ICategory } from "../interfaces/ICategories"
import { IProducts } from "../interfaces/IProducts"

export async function getCategories(): Promise<ICategory[]> {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')

  const data = response.json()

  return data
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string): Promise<IProducts> {
  const urlParams = new URLSearchParams({
    category: categoryId,
    q: query
  })

  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?' + urlParams)

  const data = response.json()

  return data
}