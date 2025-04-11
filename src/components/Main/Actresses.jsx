export default function Actresses(props) {
    const actresses = props.actresses
    return (
        actresses.map(actress => (
            <div className="col mb-2" key={actress.id}>
                <div className="card vt-width" >
                    <img src={actress.image} className="card-img-top" alt={actress.name} />
                    <div className="card-body">
                        <div className="card-text">
                            <p><span className='text-primary'>Name:</span> {actress.name}</p>
                            <p><span className='text-primary'>Year of birth:</span> {actress.birth_year}</p>
                            <p><span className='text-primary'>Nationality:</span> {actress.nationality}</p>
                            <p><span className='text-primary'>Biography:</span> {actress.biography}</p>
                            <p><span className='text-primary'>Awards:</span> {actress.awards[0]} {actress.awards[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}