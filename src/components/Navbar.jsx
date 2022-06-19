import React from 'react'
import RouteNav from './RouteNav'
import Social from './Social'
import Title from './Title'

const Navbar = () => {
  return (
      <div>
      <Social />
      <Title />
      <RouteNav/>
    </div>
  )
}

export default Navbar