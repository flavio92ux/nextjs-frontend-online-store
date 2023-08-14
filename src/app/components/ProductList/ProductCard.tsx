import { Result } from "@/app/interfaces/IProducts"
import Image from "next/image"

interface IProductCard {
  product: Result
}

export function ProductCard({ product }: IProductCard) {
  return (
    <div className="border-1">
      <div>
        <p>{product.title}</p>
      </div>
      <div className="w-14 h-14">
        <Image width={56} height={56} src={product.thumbnail} alt={product.title} />
      </div>
      <div>
        <p>{product.price}</p>
      </div>
    </div>
  )
}