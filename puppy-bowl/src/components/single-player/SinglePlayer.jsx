import './SinglePlayer.css'
import { useParams } from 'react-router-dom'

export default function SinglePlayer({puppies}){
    let {puppyId} = useParams()

    const specificPuppy = puppies.filter((el) => {
        if (el.id == Number(puppyId)){
            return el
        }
    })

    console.log(specificPuppy)
    return (
        <div className='single-container'>
            <div className='puppy'>
                <h2>The one and only</h2>
                <h1 className='puppy-name'>{specificPuppy[0].name}!</h1>
                <h3 className='puppy-stats'>{specificPuppy[0].breed}</h3>
                <h3 className='puppy-stats'>{specificPuppy[0].status}</h3>
                <img className='single-image' src={specificPuppy[0].imageUrl} alt={`photo of ${specificPuppy[0].name}`}/>
            </div>
        </div>
    )
    
}