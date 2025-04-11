export default function Actor(props) {
    const actors = props.actor
    return (
        actors.map(actor => (
            <div className="col mb-2" key={actor.id}>
                <div className="card vt-width" >
                    <img src={actor.image} className="card-img-top" alt={actor.name} />
                    <div className="card-body">
                        <div className="card-text">
                            <p><span className='text-primary'>Name:</span> {actor.name}</p>
                            <p><span className='text-primary'>Year of birth:</span> {actor.birth_year}</p>
                            <p><span className='text-primary'>Nationality:</span> {actor.nationality}</p>
                            <p><span className='text-primary'>Biography:</span> {actor.biography}</p>
                            <p><span className='text-primary'>Awards:</span> {actor.awards[0]} {actor.awards[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}