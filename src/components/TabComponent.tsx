/*
 Key Optimizations:
✅ Minimal Re-renders: Uses React.memo() to prevent unnecessary re-renders.
✅ Dynamic Imports with Lazy Loading: Uses React.lazy() to load content only when needed.
✅ Reusable Components: Avoids duplicate logic by mapping through a structured tabs array.
✅ URL-based Navigation (Optional): Uses React Router for direct access via URLs.
Fully Optimized Dynamic Tabs Component
*/

// Tab1Content component can be in sperate file, just like this all the TabContent components can be seperate out in another files and exported from there.
const Tab1Content = () => {
  return (
    <div>
      <h2>Tab 1 Content</h2>
      <p>This is detailed content for Tab 1.</p>
    </div>
  );
};

// export default Tab1Content;



import React, { useState, Suspense, lazy, memo } from "react";

// Lazy-loaded tab components for performance
const Tab1Content = lazy(() => import("./Tab1Content"));
const Tab2Content = lazy(() => import("./Tab2Content"));
const Tab3Content = lazy(() => import("./Tab3Content"));
const Tab4Content = lazy(() => import("./Tab4Content"));
const Tab5Content = lazy(() => import("./Tab5Content"));

// Tab Configuration (Easily Extendable)
const tabs = [
  { id: 1, label: "Tab 1", component: Tab1Content },
  { id: 2, label: "Tab 2", component: Tab2Content },
  { id: 3, label: "Tab 3", component: Tab3Content },
  { id: 4, label: "Tab 4", component: Tab4Content },
  { id: 5, label: "Tab 5", component: Tab5Content },
];

// Tab Navigation Component (Memoized for Performance)
const TabNav = memo(({ activeTab, setActiveTab }) => (
  <div className="tab-buttons">
    {tabs.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => setActiveTab(id)}
        className={activeTab === id ? "active-tab" : ""}
      >
        {label}
      </button>
    ))}
  </div>
));

// Main Tabs Component
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || Tab1Content;

  return (
    <div>
      {/* Tab Navigation */}
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="tab-content">
        <Suspense fallback={<div>Loading...</div>}>
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default Tabs;


/*
 Why is this the best approach?
✅ Dynamic & Extendable: Just add an entry in the tabs array for a new tab.
✅ Performance Optimized:

React.memo(TabNav) prevents unnecessary re-renders.
Lazy Loading (React.lazy) improves initial load time.
✅ Single Source of Truth: The tabs array removes redundant code.
✅ Minimal Re-renders: Only the active tab renders, others stay untouched.

*/

/*
CSS (For Better Styling)
.tab-buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-buttons button {
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}

.tab-buttons .active-tab {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

*/
