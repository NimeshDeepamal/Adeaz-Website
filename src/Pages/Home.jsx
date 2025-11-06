import React from 'react'
import Hero from '../Components/Hero/Hero.jsx'
import Popular from '../Components/Popular/Popular.jsx'
import Offers from '../Components/Offers/Offer.jsx'
import NewCollection from '../Components/NewCollection/NewCollection.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'

const Home = () => {
  return (
    <div className='home'>

      <Hero/>
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Home
