import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

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
    height: Dimensions.get('window').height / 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default ItemPopup;
