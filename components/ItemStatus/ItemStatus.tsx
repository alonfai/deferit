import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Types } from '../../utils';

export type Props = {
  status: Types.StatusValues;
};

const ItemStatus: React.FC<Props> = ({ status }) => {
  let color;
  switch (status) {
    case 'Paid':
      color = 'green';
      break;
    case 'Processing':
      color = 'yellow';
      break;
    case 'Schedule':
      color = 'black';
      break;
    case 'UnableToPay':
      color = 'red';
      break;
  }
  return (
    <View>
      <FontAwesome5 name='traffic-light' size={24} color={color} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ItemStatus;
