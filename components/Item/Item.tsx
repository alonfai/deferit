import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  Modal,
  Dimensions,
  Pressable,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { helpers, Types } from '../../utils';
import ItemStatus from '../ItemStatus';
import Record from '../Record';

export type Props = {
  item: Types.Bill;
};

const Item: React.FC<Props> = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const onThumbnailPress = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }} />
      </TouchableOpacity>
      <View style={styles.status}>
        <ItemStatus status={item.status} />
      </View>
      <View style={styles.popup}>
        <Pressable
          onPress={() => {
            console.log('clicked popup');
          }}
        >
          <Entypo name='popup' size={24} color='black' />
        </Pressable>
      </View>
      <View style={styles.information}>
        <Record label='amount' content={`$${item.amount.toLocaleString()}`} />
        <Record label='status' content={item.status} />
        <Record label='date' content={helpers.formatDate(item.date)} />
      </View>
      <Modal
        animationType='slide'
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => {
            setIsModalVisible(false);
          }}
        >
          <TouchableOpacity style={styles.modal} activeOpacity={1}>
            <Image style={styles.url} source={{ uri: item.url }} />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

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
  popup: {
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 155,
    height: 300,
  },
  url: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
  },
});

export default Item;
