// import ItemsAction from '../actions/Items'
import Actions from "../actions/Actions";
// import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
    restaurantList: null
}


function Restaurants(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.RESTAURANTS:

            // console.log('Restaurant reducer')
            return Object.assign({}, state, { restaurantList: action.value });
            break;

            case Actions.EMPTY_RESTAURANTS:
            // console.log('Restaurant reducer')
            return Object.assign({}, state, { restaurantList: null });
            break;
     




        default:
            return state;
    }
}

export default Restaurants;