import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/navbar/Nav'
import Home from './components/home/Home'
import Draft from './components/draft-page/Draft'
import Players from './components/players/Players'
import SinglePlayer from './components/single-player/SinglePlayer'
import Create from './components/create-player/Create'

function App() {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    async function fetchData(){
      try {
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        let data = await response.json()
        let actualData = data.data.players
        setPuppies(actualData)
        
      } catch (error) {
        console.log(error)
      }
    }
    console.log(puppies)
    fetchData()
  }, [])
  return (
    <div>
      <Nav />

      <Routes>
        <Route path = '/' element= {<Home />} />
        <Route path = '/draft-page' element = {<Draft puppies = {puppies} />} />
        <Route path = '/players' element = {<Players puppies = {puppies}/>} />
        <Route path = '/players/:puppyId' element={<SinglePlayer puppies = {puppies} />} />
        <Route path = '/create-player' element={<Create puppies = {puppies} setPuppies = {setPuppies} />} />
      </Routes>
    </div>
  )
}

export default App
