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
  
  // 📌 Usage
  const App = () => (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanel>Content for Tab 1</TabPanel>
      <TabPanel>Content for Tab 2</TabPanel>
    </Tabs>
  );
  