import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

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
    { id: 15, name: "Emma" }
  ];

  return (
    <ScrollView>
      <Text style={styles.text}>List with FlatList</Text>
      <FlatList
        data={user}
        renderItem={({item}) => (
          <Text style={styles.flatList}>{item.name}</Text>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 31,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  flatList: {
    fontSize: 24,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
