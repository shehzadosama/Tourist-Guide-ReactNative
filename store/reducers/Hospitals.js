// import ItemsAction from '../actions/Items'
import Actions from "../actions/Actions";
// import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
hospitalList: null
}


function Hospitals(state = INITIAL_STATE, action) {
    switch (action.type) {

        case Actions.HOSPITALS:

            // console.log('HOSPITALS reducer')
            return Object.assign({}, state, { hospitalList: action.value });
            break;

            case Actions.EMPTY_HOSPITALS:
            // console.log('Restaurant reducer')
            return Object.assign({}, state, { hospitalList: null });
            break;




        default:
            return state;
    }
}

export default Hospitals;