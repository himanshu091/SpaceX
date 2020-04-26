import React, { Component,Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import LaunchItem from './LaunchItem';
import MissingKey from './MissingKey';

const LAUNCHES_QUERY =gql`
query LaunchesQuery{
    launches {
        flight_number
        launch_year
        launch_success
        launch_date_local
        mission_name
      }
}


`;
export class Launches extends Component {
    render() {
        return (
            <Fragment>

                <h1 className ="display-4 my-3">Launches</h1>
                <MissingKey/>

                <Query query ={LAUNCHES_QUERY}>
                    {
                        ({loading,error,data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log(error);

                          

                            return <Fragment>
                                {
                                    data.launches.map(launch =>(
                                        <LaunchItem key = {launch.flight_number} launch ={launch} />
                                    ))

                                }

                            </Fragment>

                        }
                    }

                </Query>
            </Fragment>
        )
    }
}

export default Launches
