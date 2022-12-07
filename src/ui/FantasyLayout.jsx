import React from 'react'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'

export const FantasyLayout = ({children}) => {
  return (
    <div>
        <NavBar/>
        <Footer/>
    </div>
  )
}
