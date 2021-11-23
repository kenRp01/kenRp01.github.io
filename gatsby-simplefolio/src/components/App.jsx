/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <a href="https://px.a8.net/svt/ejp?a8mat=3HKWNC+9Q2WHE+2OTA+HWPVL" rel="nofollow">
        <img
          border="0"
          width="234"
          height="80"
          alt=""
          src="https://www20.a8.net/svt/bgt?aid=210927432588&wid=001&eno=01&mid=s00000012547003008000&mc=1"
        />
      </a>
      <img
        border="0"
        width="1"
        height="1"
        src="https://www10.a8.net/0.gif?a8mat=3HKWNC+9Q2WHE+2OTA+HWPVL"
        alt=""
      />
      <a
        href="https://rpx.a8.net/svt/ejp?a8mat=3HKWNC+5TKLPU+2HOM+5ZMCH&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa21092758521_3HKWNC_5TKLPU_2HOM_5ZMCH%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F"
        rel="nofollow"
      >
        <img
          width="170"
          height="80"
          src="http://hbb.afl.rakuten.co.jp/hsb/0eb4bbb0.174cb205.0eb4bbaa.95151395/"
          border="0"
        />
      </a>
      <img
        border="0"
        width="1"
        height="1"
        src="https://www12.a8.net/0.gif?a8mat=3HKWNC+5TKLPU+2HOM+5ZMCH"
        alt=""
      />
      <a href="https://px.a8.net/svt/ejp?a8mat=3HP2ZH+67V08I+40EC+61C2P" rel="nofollow">
        <img
          border="0"
          width="170"
          height="80"
          alt=""
          src="https://www21.a8.net/svt/bgt?aid=211122269376&wid=001&eno=01&mid=s00000018714001014000&mc=1"
        />
      </a>
      <img
        border="0"
        width="1"
        height="1"
        src="https://www12.a8.net/0.gif?a8mat=3HP2ZH+67V08I+40EC+61C2P"
        alt=""
      />
      <a href="https://px.a8.net/svt/ejp?a8mat=3HP2ZH+3KLNG2+33T0+TT69D" rel="nofollow">
        <img
          border="0"
          width="234"
          height="80"
          alt=""
          src="https://www23.a8.net/svt/bgt?aid=211122269216&wid=001&eno=01&mid=s00000014490005007000&mc=1"
        />
      </a>
      <img
        border="0"
        width="1"
        height="1"
        src="https://www10.a8.net/0.gif?a8mat=3HP2ZH+3KLNG2+33T0+TT69D"
        alt=""
      />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
