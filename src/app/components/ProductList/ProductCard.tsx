import { Result } from '@/app/interfaces/IProducts'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface IProductCard {
  product: Result
}

function addToCart(product: Result) {
  const listProducts = localStorage.getItem('productCart')

  const listProductsParsed = listProducts && JSON.parse(listProducts)

  if (listProductsParsed) {

    if (listProductsParsed.product.find((item: Result) => item.id === product.id)) {
      return
    }

    const arrayProducts = [...listProductsParsed.product, product]

    localStorage.setItem(
      'productCart',
      JSON.stringify({ product: arrayProducts })
    )
  } else {
    localStorage.setItem('productCart', JSON.stringify({ product: [product] }))
  }
}

export function ProductCard({ product }: IProductCard) {
  const router = useRouter()
  const handleClick = (e: any) => {
    e.preventDefault()
    localStorage.setItem('productDetail', JSON.stringify(product))
    router.push('/detalhe-produto')
  }

  return (
    <div className='w-[360px] h-[367px] bg-white rounded-[20px] shadow m-4'>
      <button type='button' onClick={handleClick}>
        <div className='p-[25px] justify-center items-center'>
          <p>{product.title}</p>
        </div>
      </button>

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

      <div className='flex justify-center'>
        <button
          onClick={() => addToCart(product)}
          className='border rounded px-6 py-1'
        >
          <span>Adicionar ao carrinho</span>
        </button>
      </div>
    </div>
  )
}
