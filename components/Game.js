import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Number from './Number'

const Game = function({randomNumbers}) {
  const [ selectedNumbers, setSelectedNumbers ] = useState([]);
  // const target = 10 + Math.floor(40 * Math.random());
  const numbers = Array.from({ length: randomNumbers })
    .map(()=> 1 + Math.floor(9 * Math.random()));
  const target = numbers.slice(0, 3)
    .reduce((accumulator, current) => accumulator + current, 0);

  const isNumberSelected = numberIndex => selectedNumbers.some(index => index === numberIndex);

  return (
    <View>
      <Text style={styles.target}>{target}</Text>
      <View style={styles.container}>
        {numbers.map((number, index) => (
          <Number key={index} number={number} isSelected={isNumberSelected(index)}></Number>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Game;
