import React from 'react';
import classnames from 'classnames';
import style from './style.css';

import { Ditto } from 'ditto-react';

const Footer = ({}) => {
  return <div className={style.footer}>
    <Ditto
      projectId="project_601cc3515be42cc3f6f8ac40"
      frameId="frame_601cc35d5be42cc3f6f8ad17"
    >
      {( frame ) => {
        return Object.keys(frame.blocks).map((blockId) => (
          <div className={style.footerCol} key={blockId}>
            {
              Object.keys(frame.blocks[blockId]).map((textId) => (
                <div className={style.link} key={textId}>
                  {frame.blocks[blockId][textId]}
                </div>
              ))
            }
          </div>
        ));
      }}
    </Ditto>
  </div>
}

export default Footer;
