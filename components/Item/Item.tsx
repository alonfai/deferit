import React from 'react';
import { Image, StyleSheet, View, Dimensions, Text, Pressable } from 'react-native';
import WebModal from 'react-modal';
import { Entypo } from '@expo/vector-icons';
import { helpers, Types } from '../../utils';
import ItemStatus from '../ItemStatus';
import ItemModal from '../ItemModal';
import Record from '../Record';

export type Props = {
  /**
   * Bill record item to show
   */
  item: Types.Bill;
};

function Item({ item }: { item: Types.Bill }, ref: React.ForwardedRef<any>) {
  const [showImage, setShowImage] = React.useState(false);
  const [showExtraDetails, setShowExtraDetails] = React.useState(false);

  const device = helpers.getDevice();

  /**
   * As we support "web" desktop rendering, the "react-modal" module needs to set the root element reference for a11y support
   */
  if (device === 'Web') {
    WebModal.setAppElement('#root');
  }

  return (
    <View style={styles.container} ref={ref}>
      {/* Thumbnail Image */}
      <View style={styles.thumbnail}>
        <Pressable
          onPress={() => {
            setShowImage(true);
          }}
        >
          <Image style={styles.thumbnailImage} source={{ uri: item.thumbnailUrl }} />
        </Pressable>
      </View>

      {/* Status Icon */}
      <View style={styles.status}>
        <Text style={styles.columnTitle}>Status</Text>
        <ItemStatus status={item.status} />
      </View>

      {/* Additional Information Popup */}
      <View style={styles.popup}>
        <Text style={styles.columnTitle}>Extra</Text>
        <View style={styles.extraIcon}>
          <Pressable
            onPress={() => {
              setShowExtraDetails(true);
            }}
          >
            <Entypo name='popup' size={24} color='black' />
          </Pressable>
        </View>
      </View>

      {/* Summary Information Panel */}
      <View style={styles.information}>
        <Text style={styles.columnTitle}>Summary</Text>
        <Record label='amount' content={`$${item.amount.toLocaleString()}`} />
        <Record label='status' content={item.status} />
        <Record label='date' content={helpers.formatDate(item.date)} />
      </View>

      {/* Modal & Popup information */}
      <ItemModal show={showImage} setShow={setShowImage}>
        <Image style={styles.url} source={{ uri: item.url }} />
      </ItemModal>
      <ItemModal show={showExtraDetails} setShow={setShowExtraDetails}>
        <View style={{ backgroundColor: '#fff', padding: 10 }}>
          <Record label='name' content={item.extra.name} />
          <Record label='Has paid' content={item.extra.paid ? 'True' : 'False'} />
          <Record label='description' content={item.extra.statusDescription} />
        </View>
      </ItemModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  columnTitle: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  status: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  popup: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginHorizontal: 15,
  },
  extraIcon: {
    justifyContent: 'center',
    flex: 1,
  },
  information: {
    flexDirection: 'column',
    marginHorizontal: 10,
    width: 130,
  },
  thumbnail: {
    paddingHorizontal: 10,
  },
  thumbnailImage: {
    width: 100,
    height: 100,
  },
  url: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
  },
});

export default React.forwardRef<Props, any>(Item);
