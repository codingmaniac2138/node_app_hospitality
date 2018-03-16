import {CREATE_RESERVATION} from '../actions/index'

export default function (state = [] , action) {

    switch(action.type){
        case CREATE_RESERVATION:
            console.log(action.payload.data)
            if(action.payload.data)
                return state.concat([action.payload.data])
    }
    return state;
}