import React, { useState, useEffect, useContext } from "react";

// 📌 Context API for Global State Management
const ThemeContext = React.createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);

// 📌 Higher-Order Component (HOC) for Authentication
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in.</p>;
  };
};

// 📌 Custom Hook for Fetching Data
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

// 📌 Render Props Pattern
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
      {render(position)}
    </div>
  );
};

// 📌 Compound Component Pattern for Tabs
const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, { activeIndex, setActiveIndex, index })
  );
};
const TabList = ({ children, activeIndex, setActiveIndex }) => (
  <div>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        isActive: activeIndex === index,
        onClick: () => setActiveIndex(index),
      })
    )}
  </div>
);
const Tab = ({ children, onClick, isActive }) => (
  <button onClick={onClick} style={{ fontWeight: isActive ? "bold" : "normal" }}>
    {children}
  </button>
);
const TabPanel = ({ children, index, activeIndex }) =>
  activeIndex === index ? <div>{children}</div> : null;

// 📌 Presentational & Container Pattern
const ProductCard = ({ name, price }) => (
  <div>
    <h3>{name}</h3>
    <p>${price}</p>
  </div>
);
const ProductContainer = () => {
  const { data: product, loading } = useFetch("/api/product");
  return loading ? <p>Loading...</p> : <ProductCard name={product.name} price={product.price} />;
};

// 📌 Main App Component
const App = () => {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeProvider>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <ProductContainer />
      <MouseTracker render={({ x, y }) => <p>Mouse is at ({x}, {y})</p>} />
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>Content for Tab 2</TabPanel>
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
