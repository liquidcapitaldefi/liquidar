import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import TeamImages from '../partials/TeamImages';
import FeaturesHome from '../partials/FeaturesHome';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Tabs from '../partials/Tabs';
import Team from '../partials/Team';
import Stats from '../partials/Stats';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Cta from '../partials/Cta';
import Timeline from '../partials/Timeline';
function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <Stats />
        <FeaturesBlocks />
        <Timeline />
       {/* <Team />*/}
       <Cta />
      


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;