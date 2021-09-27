import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { useBills } from '../../api';
import { constants, useIntersectionObserver } from '../../utils';
import Item from '../Item';

export type Props = {};

const Items: React.FC = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage, isError } = useBills(
    constants.LimitRequestSize
  );

  // Control the refetching of data automatically by user scrolling
  const ref = React.useRef(null);
  useIntersectionObserver({
    ref,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

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

  return (
    <SafeAreaView style={styles.container}>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((bill, billIndex) => {
            // Last rendered trade
            if (
              pageIndex + 1 === data.pages.length &&
              billIndex + 1 === constants.LimitRequestSize
            ) {
              return <Item key={bill.id} item={bill} ref={ref} />;
            }
            return <Item key={bill.id} item={bill} />;
          })}
        </React.Fragment>
      ))}
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
    maxWidth: `${constants.width - 80}px`,
    maxHeight: `${constants.height - 80}px`,
  },
});

export default Items;
