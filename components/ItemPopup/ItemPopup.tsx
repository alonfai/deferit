import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { constants } from '../../utils';

export type Props = {};

const ItemPopup: React.FC<Props> = () => {
  return (
    <View style={styles.header}>
      <Text>Deferit Bill List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: constants.height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default ItemPopup;
