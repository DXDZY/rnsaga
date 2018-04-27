import React, { Component } from 'react';
import {
    View,
    Button,
} from 'react-native';
class Login extends Component {
    static navigationOptions = {
        title:'Home1',
    };
    constructor(props) {
        super(props);
        this.state = {  }
    }
    login=()=>{
        // const {navigation} = this.props;
        // const {navigate} = navigation;
        this.props.navigation.navigate('CarDetail',{
            carid:123
        })
    }
    render() { 
        return (  
            <Button onPress={this.login} title="toCarDetail" color="#841584"/>
        )
    }
}
 
export default Login;