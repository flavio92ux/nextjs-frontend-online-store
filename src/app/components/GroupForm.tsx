'use client'
import React, { useState } from 'react'
import { getProductsFromCategoryAndQuery } from '../services/api'
import DropDownSvg from '../assets/img/DropdownSvg'
import LupaSvg from '../assets/img/LupaSvg'
import { ICategory } from '../interfaces/ICategories'
import { IProducts } from '../interfaces/IProducts'

interface IGroupForm {
  categories: ICategory[]
  handleData: (data: IProducts) => void
}

export function GroupForm({ categories, handleData }: IGroupForm) {
  const [category, setCategory] = useState(categories[0].name)
  const [query, setQuery] = useState('')

  function handleCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault()
    setCategory(event.target.value)
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setQuery(event.target.value)
  }

  async function fetchData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = await getProductsFromCategoryAndQuery(category, query)
    handleData(data)
  }

  return (
    <form onSubmit={fetchData}>
      <div className='flex'>
        <div className='flex items-center justify-center'>
          <div className='inline-block w-[269px] bg-gray-100'>
            <div className='flex rounded h-10'>
              <select
                onChange={handleCategory}
                className='
                w-full pl-4
                text-sm
                text-gray-900
                bg-gray-50
                focus:ring-blue-500 
                focus:border-blue-500 
                dark:bg-gray-700 
                dark:border-l-gray-700  
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:border-blue-500'
              >
                {categories.map((category: ICategory) => (
                  <option
                    className='font-sans font-medium text-lg leading-5'
                    key={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <DropDownSvg />
            </div>
          </div>
        </div>

        <div className='w-full'>
          <input
            type='search'
            id='search-dropdown'
            onChange={handleInput}
            className='
              block
              p-2.5
              w-full
              text-sm
              text-gray-900
              bg-gray-50
              rounded-r-lg 
              border-l-gray-50 
              border-gray-300 
              focus:ring-blue-500 
              focus:border-blue-500 
              dark:bg-gray-700 
              dark:border-l-gray-700  
              dark:border-gray-600 
              dark:placeholder-gray-400 
              dark:text-white 
              dark:focus:border-blue-500'
            placeholder='Search Mockups, Logos, Design Templates...'
            required
          />
          <button
            type='submit'
            className='
              absolute
              top-0
              right-0
              p-2.5
              text-sm
              font-medium
              text-white 
              bg-blue-700 
              rounded-r-lg 
              border 
              border-blue-700 
              hover:bg-blue-800 
              focus:ring-4 
              focus:outline-none 
              focus:ring-blue-300 
              dark:bg-blue-600 
              dark:hover:bg-blue-700 
              dark:focus:ring-blue-800'
          >
            <div className='w-4'>
              <LupaSvg />
            </div>
            <span className='sr-only'>Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
