import Cookies from 'js-cookie'
import { useState } from 'react'

export function useCookies(key: string, initialValue?: string) {
  const [cookie, setCookieValue] = useState(() => Cookies.get(key) || initialValue);

  const setCookie = (value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(key, value, options)
    setCookieValue(value)
  }

  const removeCookie = (options?: Cookies.CookieAttributes) => {
    Cookies.remove(key, options)
    setCookieValue(undefined)
  }

  return [cookie, setCookie, removeCookie] as const; // as const preserve order of tupple
}


/*
  * How we can use it in component

import React from "react";
import { useCookies } from "./hooks/useCookies";

const ImplementUseCookieCustomHook = () => {
  const [token, setToken, removeToken] = useCookies("authToken");

  return (
    <div>
      <h2>Auth Token: {token || "No Token Set"}</h2>
      <button onClick={() => setToken("123456", { expires: 7 })}>Set Token</button>
      <button onClick={removeToken}>Remove Token</button>
    </div>
  );
};

export default App;


*/