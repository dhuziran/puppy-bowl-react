import './Create.css'
import {useState} from 'react'

export default function Create({ puppies, setPuppies }){

    const [newPuppiesName, setNewPuppiesName] = useState('')
    const [newPuppiesBreed, setNewPuppiesBreed] = useState('')
    const [newPuppiesStatus, setNewPuppiesStatus] = useState('')
    const [newPuppiesImage, setNewPuppiesImage] = useState('')

    async function createNewPuppy(event){
        event.preventDefault()
        try {
            let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players',
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newPuppiesName,
                    breed: newPuppiesBreed,
                    status: newPuppiesStatus,
                    imageUrl: newPuppiesImage,
                })
            })
            let results = await response.json()

            setPuppies([...puppies, results])
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='create-container'>
            <h1 className='create-header'>Create Your Puppy</h1>
            <div>
                <form
                onSubmit={createNewPuppy}>
                    <label htmlFor='name'>Puppies Name:</label>
                    <input
                    name='name'
                    type='text'
                    placeholder='Puppies name goes here'
                    value={newPuppiesName}
                    onChange={(event) => {
                        setNewPuppiesName(event.target.value)
                    }}></input>

                    <label htmlFor='breed'>Puppies Breed:</label>
                    <input
                    name='breed'
                    type='text'
                    placeholder='Puppies breed goes here'
                    value={newPuppiesBreed}
                    onChange={(event) => {
                        setNewPuppiesBreed(event.target.value)
                    }}></input>

                    <label htmlFor='status'>Puppies Status:</label>
                    <input
                    name='status'
                    type='text'
                    placeholder='field or bench'
                    value={newPuppiesStatus}
                    onChange={(event) => {
                        setNewPuppiesStatus(event.target.value)
                    }}></input>

                    <label htmlFor='image'>Puppies Image URL:</label>
                    <input
                    name='image'
                    type='text'
                    placeholder='.jpg or .png'
                    value={newPuppiesImage}
                    onChange={(event) => {
                        setNewPuppiesImage(event.target.value)
                    }}></input>

                    <button className='submit-button' type='submit'>Create New Puppy</button>

                </form>
            </div>
        </div>
    )
}