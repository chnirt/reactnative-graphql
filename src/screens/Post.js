import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function PostScreen(props) {
  const navigation = useNavigation();
  const {navigate} = navigation;

  const [text, setText] = useState('');
  const [image, setImage] = useState('xxxx');

  function pickImage() {}

  function onPost() {}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="times" size={24}></FontAwesome5>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPost}>
          <FontAwesome5 name="paper-plane" size={24}></FontAwesome5>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.avatar}></Image>
        <TextInput
          autoFocus={true}
          multiline={true}
          numberOfLines={4}
          style={{flex: 1}}
          placeholder="Want to share something?"
          onChangeText={text => setText(text)}
          value={text}></TextInput>
      </View>

      <TouchableOpacity style={styles.photo} onPress={pickImage}>
        <FontAwesome5 name="camera" size={32} color="#D8D9DB"></FontAwesome5>
      </TouchableOpacity>

      <View style={{marginHorizontal: 32, marginTop: 32, height: 150}}>
        {/* <Image
          source={{uri: image}}
          style={{width: '100%', height: '100%'}}></Image> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D9DB',
  },
  inputContainer: {
    margin: 32,
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16,
  },
  photo: {
    alignItems: 'flex-end',
    marginHorizontal: 32,
  },
});