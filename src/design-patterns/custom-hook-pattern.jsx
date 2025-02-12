const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [url]);
  
    return { data, loading };
  };
  
  // 📌 Usage
  const ProductList = () => {
    const { data: products, loading } = useFetch("/api/products");
  
    return loading ? <p>Loading...</p> : <ul>{products.map((p) => <li key={p.id}>{p.name}</li>)}</ul>;
  };
  