import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
// import Modal from 'react-native-modal';
import { helpers, Types } from '../../utils';
import ItemStatus from '../ItemStatus';
import Record from '../Record';

export type Props = {
  item: Types.Bill;
};

function Item({ item }: { item: Types.Bill }, ref: React.ForwardedRef<any>) {
  const [isModalVisible, toggleModalVisible] = React.useState(false);

  return (
    <View style={styles.container} ref={ref}>
      <TouchableOpacity>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }} />
      </TouchableOpacity>
      <View style={styles.status}>
        <ItemStatus status={item.status} />
      </View>
      <View style={styles.information}>
        <Record label='amount' content={`$${item.amount.toLocaleString()}`} />
        <Record label='status' content={item.status} />
        <Record label='date' content={helpers.formatDate(item.date)} />
      </View>
      {/* <Modal isVisible={isModalVisible}>
    <View style={{ flex: 1 }}>
      <Image style={styles.url} source={{ uri: item.url }} />
      <Button title='Hide modal' onPress={toggleModalVisible} />
    </View>
  </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  status: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  information: {
    flexDirection: 'column',
    maxWidth: 200,
    marginHorizontal: 5,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  url: {
    width: 200,
    height: 200,
  },
});

export default React.forwardRef<Props, any>(Item);
