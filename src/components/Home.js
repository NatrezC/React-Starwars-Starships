import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {
    let [starships, setStarships] = useState([])

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/').then((res) => {
            console.log(res.data.results)
            setStarships(res.data.results)
        })

    }, [])

    // const display = () => {
    //     console.log(starships)
    //     return (
    //         starships.map((ship, i) => {
    //             <div key={ship.name}>
    //                 <h1>{ship.name}</h1>
                
    //                 <Link to={{ pathway: `/starships/${i}`, state: { ship } }}></Link>
    //             </div>
    //         })
    //     )
    // }
    const display = () => {
        return starships.map((ship, index) => (
            <div key={ship.name} className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{ship.name}</span>
                    </div>
                    <div className="card-action">
                        {/* Give each ship, a href "link" that will go to that particular ships page */}
                        {/* if this is whats passing the state to the child, why arent we calling it ship inside the child? */}
                        <Link to={{ pathname: `/Starships/${index}`, state: { ship } }} key={ship.name}> View Ship Info</Link>
                    </div>
                </div>
            </div>
        ))
    }











    return (
        <>
        <h1>Starship</h1>
        <div>{starships.length>0?display():null}</div>
        </>
    )
}


export default Home;