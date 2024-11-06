import React from 'react'
import { Index } from './components'
import { Section } from './components/Section'
import { Footer } from './components/Footer'

function App()
{
  return(
    <> 
      <div className='bg-slate-900 sm:bg-slate-900 w-full h-screen'>
         <Index/>
         <Section/>
         <Footer/>
      </div>
    </>
  ) 
}

export default App