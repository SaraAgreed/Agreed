import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        header:null
    }
   
    render() {
        return(
            <View 
            style={styles.container}>
            <View style={{ justifyContent:'flex-start', alignItems:'flex-start',padding:30}}>
                <Image
                style={styles.logo}
                source={require('../Images/whitelogo.png')}
                />
            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{height:40,}}>
              <TouchableOpacity
              style={styles.buttonStyle}
              onPress={ () => this.props.navigation.navigate('ContactUs')}
              >
               <Text style={styles.textStyle}>
               CONTACT US
            </Text>
                  </TouchableOpacity> 
                  </View>
            </View>
            </View>  
        );
    }
}

const styles = {
    container: {
        backgroundColor:'#000000',
        flex:1,
    },
    logo: {
       
        width:250,
        height:110
    },
    buttonStyle: {
        flex:1,    
        alignSelf:'stretch',   
        backgroundColor:'#000',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#f0932b',
        marginLeft:5,
        marginRight:5,
    
    },
    textStyle: {
        alignSelf:'center',
        color:'#f0932b',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
        
    }
    };