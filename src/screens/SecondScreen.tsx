import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function SecondScreen({navigation}): ReactElement {
  return (
    <View style={styles.container}>
      <Button title="Go to 1st" onPress={() => navigation.navigate('First')} />
      <Text>Second Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
