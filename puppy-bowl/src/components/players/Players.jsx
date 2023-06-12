import './Players.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Players({puppies}){
    const [searchQuery, setSearchQuery] = useState('')

    let filteredPuppies = puppies.filter((puppy) => {
        let lowercasedPuppy = puppy.name.toLowerCase()
        let lowercasedSearch = searchQuery.toLowerCase()

        if(lowercasedPuppy.includes(lowercasedSearch)){
            return puppy
        }
    })
    return (

        <div className='players-container'>

            <form>
                <label htmlFor='search-query'>Search For Puppy</label>
                <input
                name='search-query'
                type='text'
                placeholder='Puppy Name'
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}></input>
            </form>


            <h1 className='header2'>ALL PLAYERS PARTICIPATING</h1>
            <div className='players'>
                {filteredPuppies.map((el) => {
                    
                    return (
                        <div className='individual-player' key = {el.id}>
                            <h2 >{el.name}</h2>
                            <Link to = {`/players/${el.id}`}><button className='puppy-button'> See More Details </button></Link>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}