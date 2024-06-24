import {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Button, Header, Icon, Overlay} from 'react-native-elements';

const App = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="menu"
            color="#f50"
            onPress={() => Alert.alert('Open Sidedrawer')}
          />
        }
        centerComponent={{text: 'My title', style: styles.centerComponent}}
        rightComponent={{icon: 'home', color: '#fff'}}
        barStyle="default"
      />
      <Text>This is my screen content</Text>
      <Icon name="rowing" />

      <View style={styles.button}>
        <Button title="Open overlay" onPress={toggleOverlay} />
      </View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
        <Text>Hello from overlay</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  centerComponent: {
    color: '#fff',
    fontSize: 25,
  },
  button: {
    margin: 10,
  },
});

export default App;
