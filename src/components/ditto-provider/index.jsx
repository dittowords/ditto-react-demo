import React, {
  useEffect,
  useState,
  createContext,
  useContext
} from 'react';

export const DittoContext = createContext({});

export const useDitto = (frameId, blockId, textId, filters) => {
  const copy = useContext(DittoContext);

  // textId only
  if (textId && !blockId && !frameId) {
    for (var frameId in copy.frames) {
      for (var blockId in copy.frames[frameId].blocks) {
        if (textId in copy.frames[frameId].blocks[blockId]) {
          return copy.frames[frameId].blocks[blockId][textId];
        }
      }
      if (
        copy.frames[frameId].other_text &&
        textId in copy.frames[frameId].other_text
      ) {
        return copy.frames[frameId].other_text[textId];
      }
    }
  }

  // frameId only
  if (frameId && !blockId && !textId) {
    const frame = copy.frames[frameId];
    return frame;
  }
  if (frameId && blockId && !textId) {
    const block = copy.frames[frameId].blocks[blockId];
    if (filters && filters.tags) {
      const filtered = Object.keys(block).filter(textId => {
        //filter so only text items that have all of the tags in filters
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

  //TODO: filter by status
  //TODO: textId option
}

export const Ditto = ({
  children,
  frameId = null,
  blockId = null,
  textId = null,
  filters = null
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
