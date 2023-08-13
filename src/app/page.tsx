import { GroupForm } from './components/GroupForm'
import { getCategories } from './services/api'
import { AllCategories } from './interfaces/allCategories';

// export async function getServerSideProps() {
//   const data = await getCategories()

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default async function Home() {
  const data: AllCategories[] = await getCategories()
  return (
    <div>
      <ul>
        {data.map((item: AllCategories) => <li key={item.id}>{item.name}</li>)}
      </ul>
      <GroupForm />
    </div>
  )
}
