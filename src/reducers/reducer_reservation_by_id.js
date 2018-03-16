import {GET_RESERVATION_BY_ID} from '../actions/index'

export default function(state=[],action) {
console.log("----aaaqqqq-",action.payload)

    switch(action.type){
        case GET_RESERVATION_BY_ID:

            return action.payload.data;
    }
    return state;
}