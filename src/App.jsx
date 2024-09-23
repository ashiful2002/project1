import React from 'react'
import Button from './components/Button'
import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header'
import Hero from './components/Hero'
import Benifits from './components/Benifits'
import Collaboration from './components/Collaboration'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
const App = () => {
  return (
    <>

      <div className="pt-[4.75] lg:pt-[5.25] overflow-hidden">
        < Header />
        < Hero />
        < Benifits />
        < Collaboration />
        < Services />
        < Pricing />
        < Footer />
      </div>

      < ButtonGradient />
    </>
  )
}

export default App
