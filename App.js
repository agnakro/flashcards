import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.header}>Welcome to flashcards! {'<'}3</Text>
        <Text />
        <Card front='Jestem koniem' back="I'm on a horse" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: 'hotpink',
    fontFamily: 'Menlo',
    fontSize: 24
  }
});
