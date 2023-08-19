import { Painel } from './components/Painel';
import { getCategories } from './services/api'
import { ICategory } from './interfaces/ICategories';

export default async function Home() {
  const allCategories: ICategory[] = await getCategories()

  return (
    <div>
      <Painel categories={allCategories} />
    </div>
  )
}
