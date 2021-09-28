import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import RNModal from 'react-native-modal';
import WebModal from 'react-modal';
import { helpers } from '../../utils';

export type Props = {
  /**
   * Show the modal dialgo
   */
  show: boolean;
  /**
   * SetState event dispatch hook to show/hide the modal
   */
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemModal: React.FC<Props> = ({ children, show, setShow }) => {
  const device = helpers.getDevice();

  // render a different modal component based on what device platform we using
  return device === 'Mobile' ? (
    <RNModal isVisible={show}>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setShow(false);
        }}
      >
        <TouchableOpacity activeOpacity={1}>{children}</TouchableOpacity>
      </TouchableOpacity>
    </RNModal>
  ) : (
    <WebModal
      isOpen={show}
      onRequestClose={() => {
        setShow(false);
      }}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '800px',
          maxHeight: '800px',
          borderRadius: 10,
          borderWidth: 0.5,
        },
      }}
    >
      {children}
    </WebModal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemModal;
