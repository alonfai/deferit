import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Types } from '../../utils';

export type Props = {
  /**
   * Given bill code status
   */
  status: Types.StatusValues;
};

const ItemStatus: React.FC<Props> = ({ status }) => {
  let color: string;
  switch (status) {
    case 'Paid':
      color = 'green';
      break;
    case 'Processing':
      color = '#F0E68C';
      break;
    case 'Schedule':
      color = 'black';
      break;
    case 'UnableToPay':
      color = 'red';
      break;
  }
  // render bill status icon
  return (
    <View style={styles.container}>
      <FontAwesome5
        name={status === 'Schedule' ? 'calendar-check' : 'traffic-light'}
        size={24}
        color={color}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemStatus;
