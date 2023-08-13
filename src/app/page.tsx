import { GroupForm } from './components/GroupForm'
import { getCategories } from './services/api'
import { ICategory } from './interfaces/ICategories';

export default async function Home() {
  const allCategories: ICategory[] = await getCategories()
  return (
    <div>
      {/* <ul>
        {data.map((item: AllCategories) => <li key={item.id}>{item.name}</li>)}
      </ul> */}
      <GroupForm categories={allCategories}  />
    </div>
  )
}
