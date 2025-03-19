/*
If you want tabs to be directly accessible via URLs, use React Router:
This version is:
✅ Efficient – No redundant code
✅ Scalable – Just **update the tabs array** to add new tabs ✅ **Performance Optimized** – Uses React.memo, lazy(), and Suspense`
✅ User-Friendly – Supports direct URL navigation

*/


import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom";

const TabPage = () => {
  const { tabId } = useParams();
  const ActiveComponent = tabs.find(tab => tab.id === Number(tabId))?.component || Tab1Content;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActiveComponent />
    </Suspense>
  );
};

const TabsWithRouting = () => (
  <Router>
    <div className="tabs">
      {tabs.map(({ id, label }) => (
        <NavLink key={id} to={`/tab/${id}`} className="tab-link">
          {label}
        </NavLink>
      ))}
    </div>
    <Routes>
      <Route path="/tab/:tabId" element={<TabPage />} />
      <Route path="*" element={<TabPage />} />
    </Routes>
  </Router>
);

export default TabsWithRouting;
