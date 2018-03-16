import React, { Component } from "react";
import { connect } from "react-redux";

class ActiveReservation extends React.Component {
    render() {
        if (!this.props.activeReservation.name) {
            return (
                <div className="container">Click Above Record to get Details:</div>
            )
        }
        return (
                    <div class="card">

                        <div class="card-content">
                            <div class="container" color="#ffaadf">
                                <h1 class="display-3">{this.props.activeReservation.name}</h1>
                                <p>Hotel Name : {this.props.activeReservation.hotelName}</p>
                                <p >Arrival Date : {this.props.activeReservation.arrivalDate}</p>
                                <p>Departure Date : {this.props.activeReservation.departureDate}</p>
                            </div>
                        </div>
                    </div>
            


        )
    }
}

function mapStateToProps(state) {
    return {
        activeReservation: state.activeReservation
    }
}

export default connect(mapStateToProps)(ActiveReservation)
