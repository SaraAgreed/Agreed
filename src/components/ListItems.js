import React, { Component } from 'react';
import { Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
 } from 'react-native';
import { CardSection, ServiceHead, AboutService } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItems extends Component {
    componentWillUpdate() { 
        LayoutAnimation.spring();
    }

   renderDescription() {
    const { library, expanded } = this.props;
    if(expanded) {
        return (
            <AboutService>
                <Text style={{flex:1}}>
                    {library.description}
                </Text>
            </AboutService>
        );
    }
}
    render () {
        const { titleStyle } = styles;
        const { id, title } =this.props.library;

         return(
            <TouchableWithoutFeedback
            onPress = {() => this.props.selectLibrary(id)}>
                <View>
                    <ServiceHead>
                        <Text style={titleStyle}>
                        {title}
                        </Text>
                    </ServiceHead>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};
const styles ={
    titleStyle: {
        fontSize:18,
    paddingLeft : 15
    }
    };

const mapStatetoProps = (state, ownProps) => {
const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
}

export default connect(mapStatetoProps, actions )(ListItems);
