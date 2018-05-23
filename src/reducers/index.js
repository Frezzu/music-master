import {combineReducers} from 'redux';
import homeReducer from '../views/Home/home-reducer';
import sidebarReducer from '../components/Sidebar/sidebar-reducer';

export default combineReducers({
    homeReducer,
    sidebarReducer
});