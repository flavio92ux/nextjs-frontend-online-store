'use client'
import Image from 'next/image'
import Link from 'next/link'
import voltarImg from '../assets/img/Voltar.png'
import carrinhoImg from '../assets/img/carrinho.png'
import { useEffect, useState } from 'react'
import { IProductDetail } from '../interfaces/IProductDetail'

export default function ProductDetail() {
  const [productParsed, setProductParsed] = useState<IProductDetail>()

  useEffect(() => {
    const product = localStorage.getItem('productDetail')
    const productParsed = product && JSON.parse(product)

    setProductParsed(productParsed)
  }, [])

  return (
    <>
      {!!productParsed && (
        <div>
          <div className='flex justify-between'>
            <Link href='/'>
              <Image
                src={voltarImg}
                alt='Voltar'
                width={40}
                height={40}
              ></Image>
            </Link>
            <Link href='/carrinho'>
              <Image
                src={carrinhoImg}
                alt='Carrinho'
                width={40}
                height={40}
              ></Image>
            </Link>
          </div>

          <p className='font-bold'>
            {productParsed.category_id} - R${' '}
            {productParsed.price.toString().replace('.', ',')}
          </p>

          <div className='flex flex-row gap-7'>
            <div className='flex justify-center w-[350px] h-[260px] border'>
              <Image
                src={productParsed.thumbnail}
                width={260}
                height={260}
                alt={productParsed.title}
              />
            </div>
            <div className='w-[350px] h-[260px] border'>
              <p className='font-bold'>{productParsed.title}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
