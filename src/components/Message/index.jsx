import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const Message = ({message}) => {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

  return (
    <View style={[styles.container, {
        alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        backgroundColor: isMyMessage() ? '#0a4132' : '#232323',
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).format('HH:mm')}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    //0a4132
    container: {
        alignSelf: 'flex-start',
        backgroundColor: '#232323',
        margin: 4,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%'
    },
    time:{
        color: 'gray',
        alignSelf: 'flex-end',
        fontSize: 12,
    }
});

export default Message

