import './Players.css'
import { useNavigate, Link } from 'react-router-dom'

export default function Players({puppies}){
    console.log(puppies)
    const navigate = useNavigate() 
    return (
        <div className='players-container'>
            <h1 className='header2'>ALL PLAYERS PARTICIPATING</h1>
            <div className='players'>
                {puppies.map((el) => {
                    return (
                        <div className='individual-player' key = {el.id}>
                            <h2 >{el.name}</h2>
                            <img src = {el.imageURL} alt = {`Picture of ${el.name}`} />
                            <Link to = {`/players/${el.id}`}><button> See More Details </button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}