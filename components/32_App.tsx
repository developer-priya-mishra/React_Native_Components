import {Button, PermissionsAndroid, View} from 'react-native';
import Contacts from 'react-native-contacts';

import React, {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        Contacts.getAll()
          .then((contacts: any) => {
            console.warn(contacts);
          })
          .catch((e: any) => {
            console.log(e);
          });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  }, []);
  return (
    <View>
      <Button title="Contacts" />
    </View>
  );
};

export default App;
