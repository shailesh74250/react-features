import { useFetch } from "../hooks/useFetch";

function Home() {
  const url = 'https://dummyjson.com/users';
  const {data, loading, error} = useFetch(url);
 
  if(loading) return <p>Loading....</p>

  if(error) return <p>{error}</p>

  return (
    <ul>
      {data?.map((user: any) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  )
}

export default Home
