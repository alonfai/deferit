import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type Props = {
  /**
   * Error Boundary exception object
   */
  error: Error;
  /**
   * Reload the app invoke method
   */
  resetError: () => void;
};

const ErrorFallback: React.FC<Props> = ({ error, resetError }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name='error' size={24} color='red' />
      <Text style={styles.heading}>Something went wrong:</Text>
      <Text style={styles.message}>{error.message}</Text>
      <Button title='Try Again' accessibilityLabel='Try Again' onPress={resetError}>
        Try again
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginVertical: 10,
  },
  message: {
    color: 'red',
  },
});

export default ErrorFallback;
