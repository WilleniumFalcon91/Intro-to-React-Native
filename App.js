import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://www.noupe.com/wp-content/uploads/trans/wp-content/uploads/2010/02/waves_3.jpg'}}
          style={{ width: 275, height: 175, margin: 20}}
        />
        <Text>Hi Max!!!</Text>
        <Text>This is my favorite demo.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
