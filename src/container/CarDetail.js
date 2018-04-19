import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../action/carDetail';
import {getState} from './../selector';
import CarDetail from './../component/CarDetail';

const mapStateToProps = (state)=>getState(state).carDetail;
const mapDispatchToProps = (dispatch)=>({
    actions:bindActionCreators(actions,dispatch),
})
export default connect(mapStateToProps,mapDispatchToProps)(CarDetail);