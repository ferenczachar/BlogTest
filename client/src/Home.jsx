import style from './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Filter from './components/Filter'
import Posts from './components/Posts'

export default function Home() {
  return (
    <>
      <Navbar />
      <Search />
      <Filter />
      <Posts />
    </>
  )
}