import React from 'react'
import {Link} from 'react-router-dom'

export const Starships = (props) => {
    console.log(props)
    let shipInfo = props.location.state.ship
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title"><b>{shipInfo.name}</b></span>
                        <p>Cost <b>${shipInfo.cost_in_credits}</b></p>
                        <p>Cargo Capacity <b>{shipInfo.cargo_capacity}lbs</b></p>
                        <p>Passenger limit <b>{shipInfo.passengers} passengers</b></p>
                    </div>
                    <div className="card-action">
                        <Link to={{ pathname: '/'}}>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Starships;