import {StackNavigator,addNavigationHelpers} from 'react-navigation';
import {createReduxBoundAddListener,createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import {AppRouteConfigs} from './../../container/Navigator'

const initialState = AppRouteConfigs.router.getStateForAction(AppRouteConfigs.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
    const nextState = AppRouteConfigs.router.getStateForAction(action, state);
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
export default navReducer;