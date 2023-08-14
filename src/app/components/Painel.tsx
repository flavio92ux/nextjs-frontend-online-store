'use client'

import { GroupForm } from "./GroupForm"
import { ICategory } from '../interfaces/ICategories'
import { IProducts } from "../interfaces/IProducts"
import { useState } from "react"

export function Painel({ categories }: { categories: ICategory[] }) {
  const [data, setData] = useState<IProducts | null>(null)

  function handleData(data: IProducts | null) {
    setData(data)
  }

  return (
    <div>
      <GroupForm categories={categories} handleData={handleData}  />
    </div>
  )
}