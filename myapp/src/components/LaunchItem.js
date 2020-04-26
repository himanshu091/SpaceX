import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({  launch:{
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
   
}
  }) 
  {
   
    return <div className = "card card-body mb-3" style ={{width:"80%",margin:"auto"}}>
        <div className ="row">
        <div className ="col-md-1 col-sm-12"></div>

        <div className ="col-md-8 col-sm-12">
        <span className={launch_success ? 'text-success' : 'text-danger'}> <h5> Mission : {mission_name} </h5>  </span>
        <p> Date : {launch_date_local}</p>
        </div>

        <div className= "col-md-3 col-sm-12">
        <Link to={`/launch/${flight_number}`} className = "btn btn-warning">Launch Details</Link>


        </div>
        </div>
    </div>
}
