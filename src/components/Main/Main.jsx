// importazione file
import { useEffect, useState } from 'react'
import axios from "axios"
import Actor from './Actors'


// dichiarazione variabile api
const actorsList = 'https://www.freetestapi.com/api/v1/actors'
const actressesList = 'https://freetestapi.com/api/v1/actresses'

export default function Main() {
    const [actors, setActor] = useState([])
    
    function loadActorsList() {
        axios.get(actorsList)
            .then(resp => {
                console.log(resp.data)
                setActor(resp.data)
            })
    }

    useEffect(loadActorsList, [])

    return (
        <main className='bg-success-subtle p-4'>
            <div className="container text-center">
                <h2 className='mb-3'>Actor list</h2>
                <div className="row">
                    <Actor actor={actors} />
                </div>
                <h2 className='mb-3'>Actresses List</h2>
                <div className="row">
                    <Actor actor={actors} />
                </div>
            </div>
        </main>
    )
}