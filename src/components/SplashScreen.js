import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
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
                 <View>
                    <Text style={{fontStyle:'italic',color:'white',fontFamily:'serif',textAlign:'center'}}>Online Marketing is Complex. Let Us Make It Easy For You!</Text>
                </View> 
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