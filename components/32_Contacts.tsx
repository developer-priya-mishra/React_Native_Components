import {Button, PermissionsAndroid, Platform, StyleSheet, Text, View} from 'react-native';
import Contacts, {Contact as RNContact} from 'react-native-contacts';

import React, {useEffect, useState} from 'react';

const Contact = () => {
  const [contacts, setContacts] = useState<RNContact[]>([]);

  const requestPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        return true;
      } else {
        const readContactsGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        );

        const writeContactsGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to write to your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        );

        return (
          readContactsGranted === PermissionsAndroid.RESULTS.GRANTED &&
          writeContactsGranted === PermissionsAndroid.RESULTS.GRANTED
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getContact = () => {
    requestPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll().then(contacts => {
          setContacts(contacts);
        });
      }
    });
  };

  const addContact = () => {
    requestPermission().then(didGetPermission => {
        if (didGetPermission) {
          const newContact={
            familyName:"Steve",
            givenName:'Jones'
          }
          Contacts.addContact(newContact).then(()=>{
            getContact()
          })
        }
      });
  };

  return (
    <View style={{marginTop: 50}}>
      <View style={styles.button}>
        <Button title="Get Contacts" onPress={() => getContact()} />
      </View>
      <View style={styles.button}>
        <Button title="Add Contacts" onPress={() => addContact()} />
      </View>
      {contacts.map(item => {
        return (
          <View
            key={item.recordID}
            style={{
              padding: 10,
              borderBottomColor: 'red',
              borderBottomWidth: 1,
              marginHorizontal: 12,
            }}>
            <Text>Name : {item.givenName} {item.familyName}</Text>
            <Text>
              Email : {item.emailAddresses[0] ? item.emailAddresses[0]['email'] : null}
            </Text>
          </View>
        );
      })}
    </View>
  );
};


const styles=StyleSheet.create({
    button:{
        marginBottom:10,
        marginHorizontal:10,
    }
})
export default Contact;
