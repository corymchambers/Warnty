import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function FirstScreen({navigation}): ReactElement {
  return (
    <View style={styles.container}>
      <Button title="Go to 2nd" onPress={() => navigation.navigate('Second')} />
      <Text>First Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
