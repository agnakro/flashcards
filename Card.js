import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'front',
        };

        this.onPress = this.onPress.bind(this);
    }

    displayText() {
        if (this.state.currentView === 'front') {
            return this.props.front;
        } else {
            return this.props.back;
        }
    }

    onPress() {
        if (this.state.currentView === 'front') {
            this.setState({
                currentView: 'back',
            });
        } else {
            this.setState({
                currentView: 'front',
            });
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View style={styles.card}>
                    <Text style={styles.front}>{this.displayText()}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

Card.propTypes = {
    front: PropTypes.string.isRequired,
    back: PropTypes.string.isRequired
};

export default Card;

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#FCE4EC',
      alignItems: 'center',
      justifyContent: 'center',
      shadowOffset:{  width: 3,  height: 3,  },
      shadowColor: '#F06292',
      shadowOpacity: 1.0,
      shadowRadius: 20,
      borderRadius: 10,
      borderWidth: 0,
      width: 300,
      height: 300,
    },
    front: {
      color: 'deeppink',
      fontWeight: 'bold',
      fontFamily: 'Menlo',
      fontSize: 24
    }
  });
  