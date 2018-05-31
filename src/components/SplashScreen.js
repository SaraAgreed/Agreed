import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

export default class SplashScreen extends Component {
    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, 4000)
    }
    static navigationOptions = {
        header: null
    }
    
    render() {
        return(
            <View 
            style={styles.container}>
                <Image
                style={styles.logo}
                source={require('../Images/agreedlogo.png')}
                />
            </View>  
        );
    }
}


const styles=StyleSheet.create({
    container: {
        backgroundColor:'#353b48',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    
    logo: {
        width:252,
        height:110
    },
    
});