import React, {useState} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const App = () => {
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'SQL',
    },
    {
      id: 3,
      name: 'Python',
    },
    {
      id: 4,
      name: 'Node',
    },
    {
        id: 5,
        name: 'C++',
    },
  ];

  const [selectedRadio, setSelectedRadio] = useState();

  return (
    <View style={styles.main}>
      {
      skills.map((item:any, index) => (
        <TouchableOpacity onPress={() => setSelectedRadio(item.id)} key={index}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                    {
                        selectedRadio == item.id ?
                        <View style={styles.radioBg}></View>
                        : null
                    }
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
