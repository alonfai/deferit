import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

// React Query Native Devtools
// if (__DEV__) {
//   import("react-query-native-devtools")
//     .then(({ addPlugin }) => {
//       addPlugin({ queryClient });
//     })
//     .catch((err) => {
//       console.log(
//         `No installation of "react-query-native-devtools" was found ${err}`
//       );
//     });
// }

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
