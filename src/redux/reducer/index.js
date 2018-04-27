import {combineReducers} from 'redux';
import carDetail from './carDetail';
import navReducer from './navigator';

const appReducer = (()=>combineReducers({
    carDetail,
    nav:navReducer,
}))();
export default appReducer;