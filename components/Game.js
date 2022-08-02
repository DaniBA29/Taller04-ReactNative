import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Game = function({randomNumbers}) {
  const target = 10 + Math.floor(40 * Math.random());

  return (
    <View>
      <Text style={styles.target}>{target}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    textAlign: 'center'
  },
});

export default Game;
