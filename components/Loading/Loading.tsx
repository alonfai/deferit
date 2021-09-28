import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export type Props = {};

/**
 * Render a Loading data component when data is been refetched
 */
const Loading: React.FC<Props> = () => {
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingText}>Loading Data...</Text>
      <View>
        <EvilIcons name='spinner' size={24} color='black' />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    marginRight: 5,
  },
});

export default Loading;
