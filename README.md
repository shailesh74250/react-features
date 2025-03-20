# Custom Hooks
- A Custom Hook in React is a JavaScript function that encapsulates reusable logic using React Hooks (useState, useEffect, useRef, etc.). It allows you to share stateful logic between components without repeating code.

## Why Use Custom Hooks?
- ✅ Reusability – Extract and reuse logic across multiple components.
- ✅ Separation of Concerns – Keep components clean by moving logic to hooks.
- ✅ Improved Readability – Encapsulate complex logic in a single function.
- ✅ Avoid Code Duplication – Share behavior across components easily.

## Key Rules for Custom Hooks
- Always start the function name with use -> useFetch, useAuth, etc.
- Can use other hooks inside (useState, useEffect, useContext, etc)
- Follows React's Hooks Rules (cannot be called inside loops, conditions, or nested functions)

## When Should You Use Custom Hooks?
- When you repeat the same logic across multiple components.
- When a component is becoming tool large due to logic.
- When you need to abstract API calls, form handling, authentication, etc.

## Naming Convention for Custom Hooks in React
- File Name: It is recommended (but not mandatory) to start the filename with use to indicate it’s a hook.
- Extension:
  - Use .ts if it's a TypeScript function without JSX.
  - Use .tsx if the hook returns JSX or interacts with React components.


## Arrow function vs Normal function
- Use normal functions (function useXYZ() {}) for defining hooks.
- Use arrow functions (const fn = () => {}) only for helper functions inside the hook.