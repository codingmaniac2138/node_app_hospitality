import React , { Component} from "react";
import {connect} from "react-redux";
import {getReservationById, getReservations} from "../actions";
import {bindActionCreators} from "redux";

class ReservationList extends React.Component {

    constructor(props){
        super(props);
        this.getReservationById=this.getReservationById.bind(this)
}

    componentDidMount(){
       this.props.getReservations()
    }
    
    render(){
        return(
           <div className="list-group ">
           {this.props.reservationList.map(reservation => this.renderReservation(reservation))}
           </div>
        )
    }

    renderReservation(reservation) {
        const name =reservation.name;
        return(
            <div key ={reservation._id}
                 className="list-group-item"
                 onClick={() => this.getReservationById(reservation._id)}>
                {name}
            </div>

        )
    }

    getReservationById(id){
        this.props.getReservationById(id)
    }
}

function mapStateToProps(state) {
    return {
        reservationList : state.reservationList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getReservations : getReservations , getReservationById:getReservationById},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ReservationList)