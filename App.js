import React from 'react'

import Navbar from './components/Navbar'
const linksArray = ['Products', 'Services', 'Overview', 'Contact Us']

const App = () => {
  return (
    <div>
      <Navbar links={linksArray}></Navbar>
      
    </div>
  )
}

export default App
