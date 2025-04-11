export default function Actresses(props) {
    const actresses = props.actresses
    return (
        actresses.map(actress => (
            <div className="col mb-2" key={actress.id}>
                <div className="card vt-width" >
                    <img src={actress.image} className="card-img-top" alt={actress.name} />
                    <div className="card-body">
                        <div className="card-text">
                            <p><span className='text-primary'>Nome:</span> {actress.name}</p>
                            <p><span className='text-primary'>Anno nascita:</span> {actress.birth_year}</p>
                            <p><span className='text-primary'>Nazionalità:</span> {actress.nationality}</p>
                            <p><span className='text-primary'>Biografia:</span> {actress.biography}</p>
                            <p><span className='text-primary'>Riconoscimenti:</span> {actress.awards[0]} {actress.awards[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}