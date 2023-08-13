import { AllCategories } from "../interfaces/ICategories"
import { ProductsFromCategoryAndQuery } from "../interfaces/productsFromCategoryAndQuery"

export async function getCategories(): Promise<AllCategories[]> {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')

  const data = response.json()

  return data
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string): Promise<ProductsFromCategoryAndQuery> {
  const urlParams = new URLSearchParams({
    category: categoryId,
    q: query
  })

  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?' + urlParams)

  const data = response.json()

  return data
}