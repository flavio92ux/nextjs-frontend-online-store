import DropDownSvg from '../assets/img/DropdownSvg'
import LupaSvg from '../assets/img/LupaSvg'
import { ICategory } from '../interfaces/ICategories'

export function GroupForm({ categories }: { categories: ICategory[] }) {
  return (
    <form>
      <div className='flex'>
        <label
          htmlFor='search-dropdown'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Your Email
        </label>
        <button
          id='dropdown-button'
          data-dropdown-toggle='dropdown'
          className='flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
          type='button'
        >
          All categories{' '}
          <div className='w-2.5 h-2.5 ml-2.5'>
            <DropDownSvg />
          </div>
        </button>
        <div
          id='dropdown'
          className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
        >
          <ul
            className='py-2 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdown-button'
          >
            {categories.map((category: ICategory) => (
              <li key={category.id}>
                <button
                  type='button'
                  className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='relative w-full'>
          <input
            type='search'
            id='search-dropdown'
            className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
            placeholder='Search Mockups, Logos, Design Templates...'
            required
          />
          <button
            type='submit'
            className='absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <div className='w-4 h-4'>
              <LupaSvg />
            </div>
            <span className='sr-only'>Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
