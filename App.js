import React from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={text: 'How cool is this?'};
  }
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
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
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



