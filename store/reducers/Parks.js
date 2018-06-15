// import ItemsAction from '../actions/Items'
import Actions from "../actions/Actions";
// import {AsyncStorage} from 'react-native'

const INITIAL_STATE = {
parkList:null
}


function Parks(state = INITIAL_STATE, action) {
    switch (action.type) {

        case Actions.PARKS:

            // console.log('PARKS reducer')
            return Object.assign({}, state, { parkList: action.value });
            break;

            case Actions.EMPTY_PARKS:
            // console.log('Restaurant reducer')
            return Object.assign({}, state, { parkList: null });
            break;




        default:
            return state;
    }
}

export default Parks;