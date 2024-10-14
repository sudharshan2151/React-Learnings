import { useState, createContext } from 'react';

export const AppContext = createContext();

export default function AuthContextProvider({ children }) {
  // State variables for authentication
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  // Object containing state variables and their respective setter functions
  const obj = {
    isAuth: isAuth,
    loading: loading,
    error: error,
    token: token,
    setToken: (a) => setToken(a),
    setLoading: (a) => setLoading(a),
    setError: (a) => setError(a),
    setIsAuth: (a) => setIsAuth(a)
  };

  // Providing the context value to its children
  return <AppContext.Provider value={obj}>{children}</AppContext.Provider>;
}
