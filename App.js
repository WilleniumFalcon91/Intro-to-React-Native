import React from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={text: 'How cool is this?'};
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardDismissMode='interactive'>
        <Image 
          source={{uri: 'http://bestanimations.com/Nature/Water/wave-ocean-animated-gif-6.gif'}}
          style={{ width: 275, height: 175, margin: 20}}
        />
        <Text>Hi Max!!!</Text>
        <Text>This is my favorite demo.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.text}</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 20}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



