import {View, StyleSheet, Alert} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const HeaderComp = () => {
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
        centerComponent={{text: 'Animation Project', style: styles.centerComponent}}
        rightComponent={{icon: 'home', color: '#fff'}}
        barStyle="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerComponent: {
    color: '#fff',
    fontSize: 25,
  },
});

export default HeaderComp;
