import { createContext, useContext, useState, useEffect } from 'react';

const StatusContext = createContext()

const StatusContextProvider = StatusContext.Provider;

function StatusProvider({ children }) {
  const [cartItems, setcartItems] = useState([]);
  const [message, setMessage] = useState('')


  return (
    <StatusContextProvider value={{ cartItems, setcartItems, message, setMessage }}>
      {children}
    </StatusContextProvider>
  )
}

function useStatus() {
  const all = useContext(StatusContext)
  return all;
}

export { StatusProvider, useStatus };