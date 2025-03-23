// Manages user authentication state.
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user from an API or local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    // Replace this with real API call
    const fakeUser = { id: 1, name: "John Doe", email: credentials.email };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  // Now, if you forget to wrap your app with AuthProvider, it throws an explicit error instead of failing silently.
  return {
    ...context,
    isAdmin: context.user?.role === "admin",
  };
};


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./useAuth";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);


// uses of useAuth hook
import React from "react";
import { useAuth } from "./useAuth";

const Dashboard = () => {
  const { user, login, logout, loading, isAdmin } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ email: "test@example.com" })}>
          Login
        </button>
      )}
    </div>
  );
};

export default Dashboard;


/*
✅ You can use useContext(AuthContext) directly, but using useAuth provides:

Cleaner & more readable code ✅

Encapsulation of logic (making changes easier) ✅

Better error handling ✅

Scalability for future authentication enhancements ✅

In small projects, direct useContext might be fine, but in larger applications, useAuth is the better practice. 🚀


Using a custom hook like useAuth makes it easier to:

Standardize how authentication is accessed across your app.

Modify authentication logic in one place (instead of multiple components).

Improve maintainability, especially in large projects.
*/