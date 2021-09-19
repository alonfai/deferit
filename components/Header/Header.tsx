import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text>I'm header</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default Header;
