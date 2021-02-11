import React, {
  useEffect,
  useState,
  createContext,
  useContext
} from 'react';

export const DittoContext = createContext({});

export const useDitto = (frameId, blockId, textId) => {
  const copy = useContext(DittoContext);

  if (frameId && !blockId && !textId) {
    return copy.frames[frameId];
  }
  if (frameId && blockId && !textId) {
    return copy.frames[frameId].blocks[blockId];
  }
}

export const Ditto = ({
  children,
  frameId = null,
  blockId = null,
  textId = null,
}) => {
  return children(useDitto(frameId, blockId, textId))
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
