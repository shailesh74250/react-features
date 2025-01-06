import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './reducer';

const DataComponent = () => {
  const { data, loading, error } = useSelector((state) => state.data); // Access data slice
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData()); // Fetch data on mount
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
