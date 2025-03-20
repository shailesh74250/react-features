/*
✅ Store data in localStorage
✅ Retrieve data from localStorage
✅ Sync localStorage changes with state
✅ Update localStorage whenever the state changes
*/
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store the value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Function to update localStorage and state
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };

  // Sync state with localStorage changes from other tabs
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;


// usability -> const [name, setName] = useLocalStorage<string>("username", "Guest");

/*
  4️⃣ How It Works
  ✅ On initial render, the hook checks if key exists in localStorage.

  If yes, it retrieves and parses the value.
  If no, it uses the initial value provided.
  ✅ Whenever setValue is called:

  Updates state.
  Saves the new value in localStorage.
  ✅ Listens for storage events to sync changes across multiple tabs.
*/