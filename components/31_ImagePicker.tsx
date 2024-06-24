import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, Text, View} from 'react-native';
import {
  CameraOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const App = () => {
  const [photo, setPhoto] = useState<string | undefined>();
  const [showImagePicker, setImagePicker] = useState(false);

  interface CustomImagePickerResponse extends ImagePickerResponse {
    uri: string;
  }

  const getCameraPhoto = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
    };
    launchCamera(
      options,
      (response: ImagePickerResponse | CustomImagePickerResponse | null) => {
        if (response && response.assets && response.assets.length > 0 && response.assets[0].uri) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
    setImagePicker(false)
  };

  const getLibraryPhoto = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      presentationStyle: 'fullScreen'
    };
    launchImageLibrary(
      options,
      (response: ImagePickerResponse | CustomImagePickerResponse | null) => {
        if (response && response.assets && response.assets.length > 0 && response.assets[0].uri) {
          setPhoto(response.assets[0].uri);
        }
      },
    );
    setImagePicker(false)
  };

  return (
    <View>
      {photo !== undefined && (
        <Image source={{uri: photo}} style={styles.avatar} />
      )}

      <>
        <Modal
          transparent={true}
          visible={showImagePicker}
          animationType="slide">
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select a Photo</Text>
              <View style={styles.button}>
              <Button title="Take a Photo" onPress={getCameraPhoto} />
              </View>
              <View style={styles.button}>
              <Button title="Choose from library" onPress={getLibraryPhoto} />
              </View>
              <View style={styles.button}>
              <Button title="Cancel" onPress={() => setImagePicker(false)} />
              </View>
            </View>
          </View>
        </Modal>
      </>
      <View style={styles.button}>
        <Button title="Add your photo" onPress={() => setImagePicker(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    // width: '100%',
    height: 400,
    margin: 10,
  },
  button: {
    // alignItems: 'center',
    marginBottom:10,
    marginHorizontal:10
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
