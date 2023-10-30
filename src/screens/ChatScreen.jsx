import { StyleSheet, Text, View, FlatList, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Message from '../components/Message';
import bg from '../../assets/images/bgdark.jpg';
import messages from "../../assets/data/messages.json";
import InputBox from '../components/InputBox';

const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({ title: route.params.name});
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90} style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg} imageStyle= {{opacity: 0.3}}>
        <FlatList
          data={messages}s
          renderItem={({item}) => <Message message={item}/>}
          style={styles.list}
          inverted
        />
        <InputBox></InputBox>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    list: {
        padding: 10
    }
});

export default ChatScreen