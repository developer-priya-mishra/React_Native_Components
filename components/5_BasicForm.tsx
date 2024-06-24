import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [display, setDisplay] = useState(false);

  const resetForm = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30, margin: 9, textAlign: 'center'}}>
        Basic Form
      </Text>
      <TextInput
        placeholder="Enter user Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.textBox}
      />
      <TextInput
        placeholder="Enter user Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.textBox}
      />
      <View>
        <TextInput
          placeholder="Enter user Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          style={styles.textBox}

        />
      </View>

      <View style={{marginBottom: 10, marginHorizontal: 10}}>
        <Button
          color={'green'}
          title="Print details"
          onPress={() => setDisplay(true)}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <Button title="Clear details" onPress={resetForm} />
      </View>

      {display ? (
        <View>
          <Text style={{fontSize: 20}}>User name is {name}</Text>
          <Text style={{fontSize: 20}}>User name is {email}</Text>
          <Text style={{fontSize: 20}}>User name is {password}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default App;
