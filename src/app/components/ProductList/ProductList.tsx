import { IProducts } from "@/app/interfaces/IProducts"
import { ProductCard } from "./ProductCard"

interface IProductList {
  products: IProducts
}

export function ProductList({ products }: IProductList) {
  console.log(products)

  return (
    <div className="flex">
      {products.results.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}