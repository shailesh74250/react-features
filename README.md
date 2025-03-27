# React Design Patterns
- Reference: https://refine.dev/blog/react-design-patterns/#introduction

## Provider Pattern
- Want to pass value to across entire react application then use Provider pattern
- For example: Theme dark and light, Auth data, Helmet Provider for provide title and meta data to each pages 
- Provider pattern we can get by Context provider API, Redux API, with the help of Custom Hook
- Export context provider wrapped with Custom hook so that we can encapsulate provider logic from other components
  
## Layout Pattern
- A single application can contain multiple layouts, and each one has a different style or design
- Layout component import using Route as parent and inside that Route we can import pages Route
- Only the main content is going to be provided by children's pages or components; the rest of the page's skeleton will be provided by Layout.
- In any specific page we don't want layout styling Then import that particular page outside of the layout parent route. For example: Not found page, signing, signpu pages.

## Presentational & Container Pattern 
   - Presentational Components: Focus on rendering UI, receiving data - via props, and avoiding business logic.
   - Container Components: Handle state, API calls, and business logic, then pass data to presentational components.
   - Easier Testing → Presentational components are easier to test as they are pure functions.
   - Better Maintainability → Business logic changes don't affect UI components.
   - Reusability → UI components can be reused across the app.

## Higher-Order Component (HOC Pattern)
   - Reusing logic across multiple components.
   - A Higher-Order Component (HOC) is a function that takes a component and returns a new enhanced component.
   - Encapsulation -> Adds behavior without modifying the original component.
   - Code Reusability → Avoids repeating logic across components.
   - HOC for Authorization

            const withAuth = (WrappedComponent) => {
                return (props) => {
                    const isAuthenticated = localStorage.getItem("token") !== null;

                    return isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in.</p>;
                };
            };
            // 📌 Usage
            const Profile = () => <h2>Welcome to your profile</h2>;
            export default withAuth(Profile);


## Render Props Pattern
   - Sharing state and logic between components.
   - Instead of HOCs, we use a render prop (a function passed as a prop) to share behavior.
   - Improves Reusability → Multiple components can reuse the same logic.
   - More Flexible than HOCs → Directly control how UI is rendered.
   - Example: Mouse Tracker


            const MouseTracker = ({ render }) => {
            const [position, setPosition] = useState({ x: 0, y: 0 });

            const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });

            return <div onMouseMove={handleMouseMove}>{render(position)}</div>;
            };

            // 📌 Usage
            const App = () => (
            <MouseTracker render={({ x, y }) => <p>Mouse is at ({x}, {y})</p>} />
            );

## Compound Components Pattern
   - Best for: Creating flexible and customizable UI components (like dropdowns, tabs, and modals).
   - Instead of prop drilling, Compound Components allow multiple components to communicate.
   - More Flexible than Props-Only API → Users can compose components however they like.
   - ncapsulated Logic → Avoids prop drilling.

## Context API Pattern (Global State Management)
   - Managing global state without prop drilling.
   - Instead of passing props down multiple levels, React Context API provides a central store.
   - Avoids Prop Drilling → No need to pass props through every level.
   - Better Performance than Redux for simple global states.

            const ThemeContext = React.createContext();
            const ThemeProvider = ({ children }) => {
            const [theme, setTheme] = useState("light");

            return (
                <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
                </ThemeContext.Provider>
            );
            };

            // 📌 Usage
            const ThemedButton = () => {
            const { theme, setTheme } = useContext(ThemeContext);
            
            return (
                <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}
                >
                Toggle Theme
                </button>
            );
            };

            const App = () => (
                <ThemeProvider>
                    <ThemedButton />
                </ThemeProvider>
            );



## Hooks Pattern (Custom Hooks for Reusable Logic)
   - Encapsulating reusable stateful logic.
   - Instead of duplicating logic in multiple components, extract it into a custom hook.
   - Reusable Logic → Use the same hook in multiple places
   - Keeps Components Clean → Extracts logic from UI components.

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


- 🔹 For UI & State Separation → Use Presentational & Container Pattern
- 🔹 For Code Reusability → Use HOCs, Render Props, or Custom Hooks
- 🔹 For Component Flexibility → Use Compound Components
- 🔹 For Global State Management → Use Context API
