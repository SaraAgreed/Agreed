import React from 'react';
import { View, Text } from 'react-native';

const AboutService = ({children}) => {

    return(
        <View style={styles.aboutStyle}>
                <Text  style={styles.aboutTextStyle}>
                {children}
                </Text>
        </View>    
        
        
    );
};
const styles = {
    aboutStyle: {
        flex:1,    
        alignSelf:'stretch',   
        backgroundColor:'#000',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5,
            
    },
    aboutTextStyle: {
        fontFamily:'serif',
        textAlign:'center',
        alignSelf:'center',
        color:'#fff',
        fontSize:14,
        paddingTop:10,
        paddingBottom:10  
    }
};

export { AboutService };