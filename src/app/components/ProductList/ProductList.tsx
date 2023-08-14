import { IProducts } from "@/app/interfaces/IProducts"

interface IProductList {
  products: IProducts
}

export function ProductList({ products }: IProductList) {
  return <div>Hello</div>
}