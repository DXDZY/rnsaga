import React, { Component } from 'react';
import {View,Text,Alert,Button} from 'react-native';

class CarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        const {params} = this.props.navigation.state;
        const carid = params?params.carid:null;
        this.props.actions.getData({
            carid,
        })
    }
    showLog=()=>{
        const {data} = this.props;
        Alert.alert('title',JSON.stringify(this.props));
    }
    render() { 
        const {data} = this.props;
        Alert.alert('title',JSON.stringify(this.props));
        return (  
            <View>
                <Button onPress={this.showLog} title="click"/>
                <Button onPress={()=>this.props.navigation.goBack()} title="back"/>
            </View>
        )
    }
}
 
export default CarDetail;