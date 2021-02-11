import React from 'react';
import classnames from 'classnames';
import style from './style.css';

import { Ditto } from '../ditto-provider';

const Footer = ({}) => {
  return <div className={style.footer}>
    <Ditto
      frameId="footer"
    >
      {( frame ) => {
        return Object.keys(frame.blocks).map((blockId) => (
          <div className={style.footerCol}>
            {
              Object.keys(frame.blocks[blockId]).map((textId) => (
                <div className={style.link}>{frame.blocks[blockId][textId].text}</div>
              ))
            }

          </div>
        ));
      }}
    </Ditto>
  </div>
}

export default Footer;
