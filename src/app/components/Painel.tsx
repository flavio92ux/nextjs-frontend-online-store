'use client'

import { GroupForm } from "./GroupForm"
import { ICategory } from '../interfaces/ICategories'
import { IProducts } from "../interfaces/IProducts"
import { ProductList } from "./ProductList/ProductList"
import { useEffect, useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import carrinhoImg from '../assets/img/carrinho.png'
import { getProductsFromCategoryAndQuery } from "../services/api"

export function Painel({ categories }: { categories: ICategory[] }) {

  const [data, setData] = useState<IProducts | null>(null)

  useEffect(() => {
    const { id } = categories[0]
    getProductsFromCategoryAndQuery(id, '').then((data) => {
      setData(data)
    })
  }, [])

  function handleData(data: IProducts | null) {
    setData(data)
  }

  return (
    <div>
      <GroupForm categories={categories} handleData={handleData}  />
      <div>
          <Link href='/carrinho'>
            <Image
              src={carrinhoImg}
              alt='Carrinho'
              width={40}
              height={40}
            ></Image>
          </Link>
        </div>
      { data && <ProductList products={data} />} 
    </div>
  )
}