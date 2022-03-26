import React from 'react';
import './App.css';
import ChampSection from './Components/ChampSection/ChampSection';
import Hero from './Components/Hero/Hero';



const App = () =>  {
  return (
    <>
      <div className='p-0 m-0'>
        <Hero />
        <hr />
        <ChampSection />
      </div>
      </>
  );
};

export default App;
