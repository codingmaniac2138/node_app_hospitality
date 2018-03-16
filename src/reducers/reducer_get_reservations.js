import {GET_RESERVATIONS} from '../actions/index'
export default function (state=[],action) {

    switch(action.type){
        case GET_RESERVATIONS:
            return action.payload.data
          }

    return state;

}