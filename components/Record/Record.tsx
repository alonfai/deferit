import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type Props = {
  label: string;
  content: any;
};

/**
 * Render a given bill atribute as a row in the bill panel box
 */
const Recrod: React.FC<Props> = ({ label, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  content: {
    paddingLeft: 5,
  },
});
export default Recrod;
