import React from 'react';
import Hero from './homepage/Hero';
import Sec1 from './homepage/Sec1';
import Sec2 from './homepage/Sec2';
import Sec3 from './homepage/Sec3';
import Sec4 from './homepage/Sec4';
import Sec5 from './homepage/Sec5';
import Sec6 from './homepage/Sec6';

function Home ()
{
  return (
    <>
      <Hero />
      <Sec2 />
      <Sec1 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6/>
    </>
  );
}

export default Home;