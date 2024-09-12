import React, { useState } from 'react'
import Background from './component/Background/Background';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';

const App = () => {
  let herodata = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"Your passions"},
    {text1:"Give in to",text2:"Your passions"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar/>
        <Hero
            setPlayStatus = {setPlayStatus}
            herodata = {herodata[heroCount]}
            heroCount = {heroCount}
            setHeroCount = {setHeroCount}
            playStatus = {playStatus}
        />
    </div>
  )
}

export default App