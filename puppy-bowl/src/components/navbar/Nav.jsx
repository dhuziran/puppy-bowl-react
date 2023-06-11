import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav(){
    return (
        <div className='nav-container'>
            <div className='nav-title'>
                <h1>Puppy Bowl</h1>
            </div>
            <div className='all-nav-buttons'>
                <Link to = '/'><button className='nav-buttons'>Home</button></Link>
                <Link to = '/players'><button className='nav-buttons'>Players</button></Link>
                <Link to = '/create-player'><button className='nav-buttons'>Create</button></Link>
            </div>
        </div>
    )
}