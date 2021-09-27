import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../../utils';
import { Foundation } from '@expo/vector-icons';

export type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Foundation name='dollar-bill' size={24} color='black' />
      <Text style={styles.title}>Deferit Bill List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: constants.height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'royalblue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default Header;
