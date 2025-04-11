// importazione file
import { useEffect, useState } from 'react'
import axios from "axios"
import Actor from './Actors'
import Actresses from './Actresses'


// dichiarazione variabile api
const actorsList = 'https://www.freetestapi.com/api/v1/actors'
const actressesList = 'https://www.freetestapi.com/api/v1/actresses'

export default function Main() {
    const [actors, setActor] = useState([])
    const [actresses, setActoresses] = useState([])

    function loadActorsList() {
        axios.get(actorsList)
            .then(resp => {
                setActor(resp.data)
            })
    }

    useEffect(loadActorsList, [])

    function loadActoressesList() {
        axios.get(actressesList)
            .then(resp => {
                setActoresses(resp.data)
            })
    }

    useEffect(loadActoressesList, [])

    return (
        <main className='bg-success-subtle p-4'>
            <div className="container text-center">
                <h2 className='mb-3'>Actor list</h2>
                <div className="row">
                    <Actor actor={actors} />
                </div>
                <hr />
                <h2 className='mb-3'>Actresses List</h2>
                <div className="row">
                    <Actresses actresses={actresses} />
                </div>
            </div>
        </main>
    )
}