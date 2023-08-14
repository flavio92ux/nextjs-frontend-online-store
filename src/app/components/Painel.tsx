'use client'

import { GroupForm } from "./GroupForm"
import { ICategory } from '../interfaces/ICategories'
import { useState } from "react"

export function Painel({ categories }: { categories: ICategory[] }) {
  const [data, setData] = useState('')

  function handleData(data: string) {
    setData(data)
  }

  return (
    <div>
      <GroupForm categories={categories} handleData={handleData}  />
      <h1>{data}</h1>
    </div>
  )
}