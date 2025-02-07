import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data;
}

function Product() {
  const {data, isLoading, error} = useQuery('datakey', fetchData, {
    staleTime: 5000, // Data stays fresh for 5 seconds
    retry: 2, // Retry failed requests twice
  });

  if(error) {
    return <p>{error.message}</p>
  }

  if(isLoading) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
      {data?.products?.map((product) =>
        <p>{product.title}</p>
      )}
    </div>
  )
}
  
export default Product
  