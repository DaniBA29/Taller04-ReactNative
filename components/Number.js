import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default Number = ({number}) => {
  const handlePress = ()=>{
    console.log(number);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.number}>{number}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  number: {
    backgroundColor: '#999',
    width: 100,
    height: 50,
    marginHorizontal: 15,
    marginVertical: 25,
    fontSize: 35,
    textAlign: 'center',
  },
});
