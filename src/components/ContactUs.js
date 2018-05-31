import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Card, CardSection, Button } from './common';


export default class ContactUs extends Component {
    static navigationOptions = {
        title: 'CONTACT US'
    }
    render() {
        return(
            <View style={styles.container}>
                <Card>
               <CardSection>
                   <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={styles.header}>E-MAIL:</Text>
                    <Text style={styles.address}>contact@agreedtechnologies.com</Text>
                    </View>
                </CardSection>
                <CardSection>
                   <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={styles.header}>PHONE:</Text>
                    <Text style={styles.address}>+1 (646) 461-1731,</Text>
                    <Text style={styles.address}>+1 (646) 797-3243, +1 (646) 583-1503</Text>
                    </View>
                </CardSection>
                <CardSection>
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={styles.header}>ADDRESS:</Text>
                    <CardSection>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={styles.address}>New York Office</Text>
                            <Text style={styles.address}>(40 Wall Street New York City, NY 10005</Text>
                            <Text style={styles.address}> United States)</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                    <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={styles.address}>Toledo Office</Text>
                            <Text style={styles.address}>(4331 N Holland Sylvania Rd, Toledo, OH 43623</Text>
                            <Text style={styles.address}> United States)</Text>
                            </View>
                    </CardSection>
                    <CardSection>
                        <View style={{flex:1, alignItems: 'center'}}>
                            <Text style={styles.address}>India Office</Text>
                            <Text style={styles.address}>(3rd Floor, 2/8 Vivek Khand, Gomti nagar,</Text>
                            <Text style={styles.address}>Lucknow, Uttar Pradesh 226010 India)</Text>
                        </View>
                    </CardSection>
                    </View>
                </CardSection>
               
            </Card>
            </View>
        );
    }
}

const styles = {
    container: {
        flex:1,
        backgroundColor:'#000',
        
    },
    header: {
        color:'#f0932b',
        fontWeight: 'bold',
        fontSize: 20,
    },
    address: {
        color:'white'
    },
    };