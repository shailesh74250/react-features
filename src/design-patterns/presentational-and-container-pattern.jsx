// 📌 Presentational Component (Only UI)
const ProductCard = ({ name, price }) => (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
  
  // 📌 Container Component (Handles Data & Logic)
  const ProductContainer = () => {
    const [product, setProduct] = useState({ name: "Laptop", price: 1200 });
  
    return <ProductCard name={product.name} price={product.price} />;
  };
  