import React from 'react';
import { FlatList, View } from 'react-native';
import { useBillsQuery } from '../../api';
import { constants, helpers, useIntersectionObserver } from '../../utils';
import Item from '../Item';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

export type Props = {};

const Items: React.FC<Props> = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage, isError } = useBillsQuery(
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
    return <Loading />;
  }

  // Unable to parse the API result
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const bills = data?.pages.reduce(
    (previousPage, currentPage) => [...previousPage, ...currentPage],
    []
  );

  return helpers.getDevice() === 'Mobile' ? (
    <FlatList
      data={bills}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
      onEndReached={() => hasNextPage && fetchNextPage()}
      ListFooterComponent={<Loading />}
      onEndReachedThreshold={0.5}
    />
  ) : (
    <View>
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.map((bill, billIndex) => {
            // Last rendered bill
            if (
              pageIndex + 1 === data.pages.length &&
              billIndex + 1 === constants.LimitRequestSize
            ) {
              return (
                <React.Fragment key={bill.id}>
                  <Item item={bill} ref={ref} />
                  <Loading />
                </React.Fragment>
              );
            }
            return <Item key={bill.id} item={bill} />;
          })}
        </React.Fragment>
      ))}
    </View>
  );
};

export default Items;
