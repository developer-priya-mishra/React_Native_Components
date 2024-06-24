import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
    const user = [
        { id: 1, name: "Peter" },
        { id: 2, name: "John" },
        { id: 3, name: "Alexa" },
        { id: 4, name: "Smeagle" },
        { id: 5, name: "Sam" },
        { id: 6, name: "Sarah" },
        { id: 7, name: "Michael" },
        { id: 8, name: "Emily" },
        { id: 9, name: "David" },
        { id: 10, name: "Linda" },
        { id: 11, name: "Jessica" },
        { id: 12, name: "Christopher" },
        { id: 13, name: "Sophia" },
        { id: 14, name: "Matthew" },
        { id: 15, name: "Emma" },
        { id: 16, name: "Daniel" },
        { id: 17, name: "Olivia" },
        { id: 18, name: "Joshua" },
        { id: 19, name: "Ava" },
        { id: 20, name: "William" },
    ];
    

  return (
    <View>
      <Text style={styles.text1}>Dynamic Grid</Text>
      <ScrollView>
      <View style={styles.list}>
        {
        user.map((item, index) => (
          <Text key={index} style={styles.text2}>
            {item.name}
          </Text>
        ))
        }
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
    textAlign: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text2: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 7.5,
    padding: 5,
    width: 120,
    height: 120,
  },
},);

export default App;
