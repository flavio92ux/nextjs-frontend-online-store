'use client'

import { GroupForm } from "./GroupForm"
import { ICategory } from '../interfaces/ICategories'
import { IProducts } from "../interfaces/IProducts"
import { ProductList } from "./ProductList/ProductList"
import { useState } from "react"

export function Painel({ categories }: { categories: ICategory[] }) {
  const [data, setData] = useState<IProducts | null>(null)

  function handleData(data: IProducts | null) {
    setData(data)
  }

  return (
    <div>
      <GroupForm categories={categories} handleData={handleData}  />
      { data && <ProductList products={data} />} 
    </div>
  )
}