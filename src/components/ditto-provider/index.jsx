import React, {
  useEffect,
  useState,
  createContext,
  useContext
} from 'react';

export const DittoContext = createContext({});

export const useDitto = (id) => {
  const copy = useContext(DittoContext);
  return copy[id];
}

export const Ditto = ({
  children,
  id
}) => {
  return children(useDitto(id))
}

const DittoProvider = ({
  children,
  source
}) => {
  return (
    <DittoContext.Provider value={source}>
      {children}
    </DittoContext.Provider>
  )
}

export default DittoProvider;
