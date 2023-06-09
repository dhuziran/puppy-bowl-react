import './SinglePlayer.css'
import { useParams } from 'react-router-dom'

export default function SinglePlayer({puppies}){
    let {puppyId} = useParams()
    return (
        <div>
            <h2>{puppies[0].name}</h2>
        </div>
    )
    
}