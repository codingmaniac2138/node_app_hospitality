import React, { Component } from 'react';
import ReservationList from '../container/reservation_list'
import ActiveReservation from "./active_reservation";

export default class ReservationDetails extends Component {
    render() {
        return (
            <div >
              
                <div class="row">
                    <div className="col s12 m6">
                        <div class="card grey lighten-3">

                            <div class="card-content">
                            <h3>Reservation Details</h3>
                                <a >

                                    <ReservationList />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <div class="card">

                            <div class="card-content">
                                <div>
                                    <ActiveReservation />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}


