import React from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  ScrollView,
  Image,
  View,
  WebView,
} from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      text: 'How cool is this?',
    };
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} keyboardDismissMode='interactive'>
        <Text style={styles.header}>
          William Elliott
        </Text>
        <WebView
          source={{uri: 'http://williamclarkelliott.com'}}
          style={{ width: 275, height: 100, marginTop: 20, flex: 1}}
        />
        {/* <Image 
          source={{uri: 'http://bestanimations.com/Nature/Water/wave-ocean-animated-gif-6.gif'}}
          style={{ height: 150, width: 275}}
        /> */}
        <Text>Hi Max!!!</Text>
        <Text>This is my favorite demo.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>{this.state.text}</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, margin: 20, backgroundColor: 'white'}}
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
    backgroundColor: '#56baf8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 35,
    fontSize: 20,
    fontWeight: 'bold',
  }
});



