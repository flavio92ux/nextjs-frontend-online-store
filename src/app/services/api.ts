interface AllCategories {
  id: string;
  name: string
}

export async function getCategories(): Promise<AllCategories[]> {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories')

  const data = response.json()

  return data
}