import { combineReducers } from 'redux';
import ReservationList from './reducer_get_reservations'
import ActiveReservation from './reducer_reservation_by_id'

const rootReducer = combineReducers({
    reservationList: ReservationList,
    activeReservation : ActiveReservation
});

export default rootReducer;
