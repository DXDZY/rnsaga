import React, { Component } from 'react';
import {StackNavigator,addNavigationHelpers} from 'react-navigation'
import {connect} from 'react-redux';
import CarDetail from './CarDetail';
import Login from './Login';
import {createReactNavigationReduxMiddleware,createReduxBoundAddListener} from 'react-navigation-redux-helpers';


export const AppRouteConfigs = StackNavigator({
    Login:{screen:Login},
    CarDetail:{screen:CarDetail},
});


export const navMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
export const addListener = createReduxBoundAddListener("root");
class App extends Component {
    render() {
      return (
        <AppRouteConfigs navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener,
        })} />
      );
    }
}
const mapStateToProps = (state) => ({
    nav: state.nav
});
export const AppWithNavigationState = connect(mapStateToProps)(App);