import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


export default class Home extends Component {
    static navigationOptions = {
        header:null
    }
   
    render() {
        return(
            <ScrollView 
            style={styles.container}>
            <View style={{ justifyContent:'flex-start', alignItems:'flex-start',padding:30}}>
                <Image
                style={styles.logo}
                source={require('../Images/whitelogo.png')}
                />
                <Text style={[styles.heading,{color:'#f0932b'}]}>YOUR</Text>
                <Text style={[styles.heading,{color:'#fff'}]}>DIGITAL MARKETING</Text>
                <Text style={[styles.heading,{color:'#f0932b'}]}>AGENCY</Text>
                <Text style={styles.fontStyle}>Start working with an SEO company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sale.</Text>
                <Text style={[styles.heading,{color:'#f0932b',textDecorationLine: 'underline',}]}>Our Services:</Text>
                <Text style={styles.fontStyle}>*Search Engine Optimization</Text>
                <Text style={styles.fontStyle}>*Pay-Per-Click</Text>
                <Text style={styles.fontStyle}>*Social Media</Text>
                <Text style={styles.fontStyle}>*Web Design</Text>
                <Text style={styles.fontStyle}>*Wordpress</Text>
                <Text style={styles.fontStyle}>*Mobile App Development</Text>   
               
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
            </ScrollView>  
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
    },
    heading: {
        fontWeight:'600',
        fontSize: 40,
        fontFamily: 'serif'
    },
    fontStyle: {
        color:'white', 
        fontFamily:'serif'
    },
    containerStyle: {
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#f0932b',
            shadowColor:'#000',
            shadowOffset:{width:0 , height:2},
            shadowOpacity:0.1,
            shadowRadius:2,
            elevation:1,
            marginLeft:5,
            marginRight:5,
            marginTop:10
        
    }
    };