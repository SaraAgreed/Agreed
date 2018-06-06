import React from 'react';
import { View, Text } from 'react-native';

const ServiceHead = ({children}) => {

    return(
        <View style={styles.serviceHeader}>
                <Text  style={styles.aboutService}>
                {children}
                </Text>
        </View>    
        
        
    );
};
const styles = {
    serviceHeader: {
        flex:1,    
        alignSelf:'stretch',   
        backgroundColor:'#f0932b',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5,
            
    },
    aboutService: {
        fontFamily:'serif',
        alignSelf:'center',
        color:'#fff',
        fontSize:16,
        fontWeight:'200',
        paddingTop:10,
        paddingBottom:10  
    }
};

export { ServiceHead };