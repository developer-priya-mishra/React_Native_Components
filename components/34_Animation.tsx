import React, {useEffect, useRef} from 'react';
import { Easing } from 'react-native';
import {Animated, StyleSheet, Text, View,Button} from 'react-native';

const Animation = () => {
  const moveEl = useRef(new Animated.ValueXY()).current;
  const moveElTwo = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.spring(moveEl, {
    //   toValue: {x: 100, y: 300},
    //   useNativeDriver: false,
    //   friction:1,
    //   tension:100
    // }).start();
  }, [moveEl]);

  const runMyAnim = () => {
    Animated.timing(moveEl, {
      toValue: {x: 100, y: 300},
      useNativeDriver: false,
      duration: 2000,
      delay:1000,
      easing: Easing.bounce,
    }).start();
  };

  const runMyAnimTwo = () => {
    Animated.timing(moveElTwo, {
      toValue: 0,
      useNativeDriver: false,
      duration: 500,
      delay:500,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Trigger Animation for vectors" onPress={runMyAnim} />
      </View>
      <View style={styles.button}>
        <Button title="Trigger Animation for single value" onPress={runMyAnimTwo} />
      </View>
      <Animated.View 
    //   style={moveEl.getLayout()}
    style={{
        opacity:moveElTwo
    }}
      >
        <View style={styles.square}>
          <Text>Animation One</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  button: {
    margin: 10,
  },
});

export default Animation;
