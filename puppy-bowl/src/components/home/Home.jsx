import './Home.css'
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div className='background'>
            <h1>Welcome To The Annual</h1>
            <h1 className='puppy-bowl'>PUPPY BOWL</h1>
            <Link to ='/players'><button className='button'>Let's Begin</button></Link>
        </div>
    )
}