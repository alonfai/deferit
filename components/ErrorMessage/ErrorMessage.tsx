import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Types } from '../../utils';

export type Props = {
  /**
   * Error message response from the API when unable to retrieve data
   */
  error: Types.ResponseError | null;
};

const ErrorMessage: React.FC<Props> = ({ error }) => {
  return (
    error && (
      <View style={styles.error}>
        <MaterialIcons name='error' size={24} color='red' />
        <Text style={styles.errorText}>{error.message}</Text>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  error: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 20,
    marginLeft: 10,
    maxWidth: `${Dimensions.get('window').width - 80}px`,
    maxHeight: `${Dimensions.get('window').height - 80}px`,
  },
});

export default ErrorMessage;
