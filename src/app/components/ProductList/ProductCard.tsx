import { Result } from '@/app/interfaces/IProducts'
import Image from 'next/image'
import { useHistory } from "react-router-dom";

interface IProductCard {
  product: Result
}

function HandleRoute(product: Result) {
  localStorage.setItem('productDetail', JSON.stringify(product))
  const router = useRouter()

  router.push('/detalhe-produto')
}

export function ProductCard({ product }: IProductCard) {
  return (
    <button type='button' onClick={() => HandleRoute(product)}> 
      <div className='w-[360px] h-[367px] bg-white rounded-[20px] shadow m-4'>
        <div className='p-[25px] justify-center items-center'>
          <p>{product.title}</p>
        </div>

        <div className='py-1 justify-center items-center flex'>
          <Image
            width={150}
            height={150}
            src={product.thumbnail}
            alt={product.title}
          />
        </div>

        <div className='flex p-[25px] justify-center items-center'>
          <div className='text-slate-500 text-base font-normal leading-[23px] tracking-wide'>
            {product.price}
          </div>
        </div>
      </div>
    </button>
  )
}
