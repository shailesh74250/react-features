/*
  useDebounce hook will take function, timer as arguement
  delays updating values until a specified delays has passed since the last change
  Useful for optimizing expensive operations like API calls, search inputs, and filtering.
*/

import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler); // Cleanup timeout on every change
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;


import React, { useState } from "react";
import useDebounce from "./useDebounce";

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log("API Call with:", debouncedSearchTerm);
            // Fetch data from API using debouncedSearchTerm
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Debounced Value: {debouncedSearchTerm}</p>
        </div>
    );
}

export default SearchComponent;


/*How It Works
Listens to value changes.
Delays updating debouncedValue by delay milliseconds.
Clears timeout if value changes before the delay finishes.
🔹 When to Use useDebounce?
✔️ Search bar input to avoid API calls on every keystroke.
✔️ Filtering UI where real-time updates cause performance issues.
✔️ Preventing excessive re-renders in heavy computations.

*/