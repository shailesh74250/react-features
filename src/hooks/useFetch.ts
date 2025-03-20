/*
  It should be reusable for all the request like - get, post, patch, put, delete
*/

import axios from "axios"
import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setData(response.data.users);
    } catch(err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])
 
  return { data, loading, error};
}