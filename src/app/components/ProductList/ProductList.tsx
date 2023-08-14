import { IProducts } from "@/app/interfaces/IProducts"
import { ProductCard } from "./ProductCard"

interface IProductList {
  products: IProducts
}

export function ProductList({ products }: IProductList) {
  return (
    <div className="flex justify-center flex-wrap">
      {products.results.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}