import React from 'react'
import style from './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import Posts from './components/Posts'

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      <Posts />
    </>
  )
}

export default App