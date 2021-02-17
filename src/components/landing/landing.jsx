import React from 'react';
import classnames from 'classnames';
import style from './style.css';
import logo from "../../img/logo.png";
import source from "../../text.json";
import Footer from '../footer';

import DittoProvider, { Ditto } from '../ditto-provider';

const Landing = ({}) => {
  return <div className={style.body}>
    <DittoProvider source={source}>
      <div className={style.header}>
        <div className={style.nav}>
          <div className={style.logo}>
            <img src={logo}/>
          </div>
          <div className={style.links}>
            <Ditto
              frameId="landing_header"
              blockId="navigation"
              filters={{ tags: ["TOP_NAV"]}}
            >
              {( block ) => {
                return Object.keys(block).map((id) => (
                  <div className={style.link} key={block[id]}>{block[id]}</div>
                ));
              }}
            </Ditto>
          </div>
          <div>Become a host</div>
        </div>
        <div className={style.hero}>
          <Ditto frameId="landing_header" blockId="hero">
            {({
              hero_h1, hero_subtext, hero_cta
            }) => (
              <div>
                <h1>{hero_h1}</h1>
                <h2>{hero_subtext}</h2>
                <button>{hero_cta}</button>
              </div>
            )}
          </Ditto>
        </div>
      </div>
      <div className={classnames(style.section, style.light)}>
        <h2><Ditto textId="text_601cc35c5be42cc3f6f8ac54"/></h2>
        <div className={style.gallery}>
          <div className={style.card4}>
            <div className={classnames(style.img, style.liveAnywhere0)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac56"/>
            </div>
          </div>
          <div className={style.card4}>
            <div className={classnames(style.img, style.liveAnywhere1)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac57"/>
            </div>
          </div>
          <div className={style.card4}>
            <div className={classnames(style.img, style.liveAnywhere2)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac58"/>
            </div>
          </div>
          <div className={style.card4}>
            <div className={classnames(style.img, style.liveAnywhere3)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac59"/>
            </div>
          </div>
        </div>

      </div>
      <div className={classnames(style.section, style.dark)}>
        <h2><Ditto textId="text_601cc35c5be42cc3f6f8ac5a"/></h2>
        <div className={style.gallery}>
          <div className={style.card2}>
            <div className={classnames(style.img, style.onlineexp1)}>
              <div className={classnames(style.label, style.caption)}>
                <Ditto textId="text_601cc35c5be42cc3f6f8ac60"/>
              </div>
            </div>
          </div>
          <div className={style.vertical}>
            <div className={style.gallery}>
              <div className={style.card2}>
                <div className={classnames(style.img, style.onlineexp2)}>
                  <div className={classnames(style.label, style.caption)}>
                    <Ditto textId="text_601cc35c5be42cc3f6f8ac63"/>
                  </div>
                </div>
              </div>
              <div className={style.card2}>
                <div className={classnames(style.img, style.onlineexp3)}>
                  <div className={classnames(style.label, style.caption)}>
                    <Ditto textId="text_601cc35c5be42cc3f6f8ac62"/>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.card1}>
              <div className={classnames(style.img, style.onlineexp4)}>
                <div className={classnames(style.label, style.caption)}>
                  <Ditto textId="text_601cc35c5be42cc3f6f8ac63"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classnames(style.section, style.light)}>
        <h2><Ditto textId="text_601cc35c5be42cc3f6f8ac50"/></h2>
        <div className={style.gallery}>
          <div className={style.card3}>
            <div className={classnames(style.img, style.hosts0)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac5d"/>
            </div>
          </div>
          <div className={style.card3}>
            <div className={classnames(style.img, style.hosts1)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac5e"/>
            </div>
          </div>
          <div className={style.card3}>
            <div className={classnames(style.img, style.hosts2)}></div>
            <div className={style.label}>
              <Ditto textId="text_601cc35c5be42cc3f6f8ac5f"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </DittoProvider>
  </div>
}

export default Landing;
