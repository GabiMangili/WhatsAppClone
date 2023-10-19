import { StyleSheet, Text, View, TextInput } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';


const InputBox = () => {

    const [newMessage, setNewMessage] = useState('');

    const onSend = () => {
        console.warn('Enviando mensagem', newMessage);

        setNewMessage('');
    }

  return (
    <View style={styles.container}>
        <AntDesign name="plus" size={20} color='royalblue'/>
        <TextInput
            value={newMessage}
            onChangeText={setNewMessage}
            style={styles.input}
            placeholder='Digite sua mensagem...'
        />
        <MaterialIcons style={styles.send} name='send' size={16} color='white' onPress={onSend}/>
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#141414',
        paddingTop: 5,
        paddingBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: '#232323', borderRadius: 50,
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderColor: '#3b3b3b',
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {
        backgroundColor: 'royalblue',
        padding: 7,
        borderRadius: 15,
        overflow: 'hidden',
    }
})