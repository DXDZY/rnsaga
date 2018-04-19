import React, { Component } from 'react';
import {View,Text,Alert,Button} from 'react-native';

class CarDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        this.props.actions.getData({
            carid:123,
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
            </View>
        )
    }
}
 
export default CarDetail;