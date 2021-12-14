import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { helpers } from '../../utils';

export type Props = {};

const device = helpers.getDevice();

const Header: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Foundation name='dollar-bill' size={24} color='black' />
      <Text style={styles.title}>Bill List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    paddingTop: device === 'Mobile' ? 12 : 6,
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
