import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Dimensions, FlatList } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { useBills } from '../../api';
import { constants, Types } from '../../utils';
import Item from '../Item';

export type Props = {};

const Items: React.FC = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage, isError } = useBills(
    constants.LimitRequestSize
  );

  // Determine the loading state
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading Data...</Text>
        <EvilIcons name='spinner' size={24} color='black' />
      </View>
    );
  }

  // Unable to parse the API result
  if (isError) {
    return (
      <View style={styles.error}>
        <MaterialIcons name='error' size={24} color='red' />
        <Text style={styles.errorText}>{error?.message ?? ''}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Types.Bill }) => {
    return <Item item={item} />;
  };

  const bills = data?.pages.reduce(
    (previousPage, currentPage) => [...previousPage, ...currentPage],
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bills}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    marginBottom: 10,
  },
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

export default Items;
