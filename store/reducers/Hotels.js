// import ItemsAction from '../actions/Items'
import Actions from "../actions/Actions";
// import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
    hotelList:null
}


function Hotels(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.HOTELS:

            // console.log('HOTELS reducer')
            return Object.assign({}, state, { hotelList: action.value });
            break;
            case Actions.EMPTY_HOTELS:
            // console.log('Restaurant reducer')
            return Object.assign({}, state, { hotelList: null });
            break;





        default:
            return state;
    }
}

export default Hotels;