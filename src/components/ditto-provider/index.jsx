import React, {
  useEffect,
  useState,
  createContext,
  useContext
} from 'react';

export const DittoContext = createContext({});

const useDittoSingleText = (textId) => {
  const copy = useContext(DittoContext);

  for (var frameId in copy.frames) {
    for (var blockId in copy.frames[frameId].blocks) {
      if (textId in copy.frames[frameId].blocks[blockId]) {
        return copy.frames[frameId].blocks[blockId][textId].text;
      }
    }
    if (
      copy.frames[frameId].other_text &&
      textId in copy.frames[frameId].other_text
    ) {
      return copy.frames[frameId].other_text[textId].text;
    }
  }
}
const useDitto = (frameId, blockId, textId, filters) => {
  const copy = useContext(DittoContext);

  // textId only
  if (textId && !blockId && !frameId) {
    return useDittoSingleText(textId);
  }

  // frameId only
  if (frameId && !blockId && !textId) {
    const frame = copy.frames[frameId];
    return frame;
  }
  if (frameId && blockId && !textId) {
    const raw_block = copy.frames[frameId].blocks[blockId];
    const block = Object.keys(raw_block).filter(textId => {
      if (!filters) return true;
      //filter so only text items that have all of the tags in filters
      return filters.tags.every(tag => (
        raw_block[textId].tags &&
        raw_block[textId].tags.includes(tag)
      ));
    }).reduce((obj, id) => {
      obj[id] = raw_block[id].text;
      return obj;
    }, {});

    return block;
  }

  //TODO: filter by status
  //TODO: textId option
}

export const Ditto = ({
  children = null,
  frameId = null,
  blockId = null,
  textId = null,
  filters = null
}) => {
  if (!children && textId) return useDitto(frameId, blockId, textId, filters)
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
