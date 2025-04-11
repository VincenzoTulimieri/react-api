export default function Actor(props){
    const actors= props.actor
    return(
        actors.map(actor => (
            <div className="col mb-2" key={actor.id}> 
                <div className="card vt-width" >
                    <img src={actor.image} className="card-img-top" alt={actor.name}/>
                    <div className="card-body">
                        <div className="card-text">
                            <p><span className='text-primary'>Nome:</span> {actor.name}</p>
                            <p><span className='text-primary'>Anno nascita:</span> {actor.birth_year}</p>
                            <p><span className='text-primary'>Nazionalità:</span> {actor.nationality}</p>
                            <p><span className='text-primary'>Biografia:</span> {actor.biography}</p>
                            <p><span className='text-primary'>Riconoscimenti:</span> {actor.awards[0]} {actor.awards[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}