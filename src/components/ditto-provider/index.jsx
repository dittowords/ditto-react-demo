import React, {
  useEffect,
  useState,
  createContext,
  useContext
} from 'react';

export const DittoContext = createContext({});

export const useDitto = (frameId, blockId, textId, filters) => {
  const copy = useContext(DittoContext);

  if (frameId && !blockId && !textId) {
    const frame = copy.frames[frameId];
  }
  if (frameId && blockId && !textId) {
    const block = copy.frames[frameId].blocks[blockId];
    if (filters && filters.tags) {
      //filter so only text items that have all of the tags in filters
      const filtered = Object.keys(block).filter(textId => {
        return filters.tags.every(tag => (
          block[textId].tags &&
          block[textId].tags.includes(tag)
        ));
      }).reduce((obj, id) => {
        obj[id] = block[id];
        return obj;
      }, {});

      return filtered;
    }
    return block;
  }

  //TODO: filter by tags
  //TODO: textId option
}

export const Ditto = ({
  children,
  frameId = null,
  blockId = null,
  textId = null,
  filters
}) => {
  return children(useDitto(frameId, blockId, textId, filters))
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
