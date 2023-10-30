import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigation } from '@react-navigation/native';
dayjs.extend(relativeTime);


const ChatListItem = ({ chat }) => {

    const navigation = useNavigation();
    
    console.log(chat);
    console.log(chat.lastMessage.createdAt);
    return (
        <Pressable onPress={() => navigation.navigate('Chat', {id: chat.id, name: chat.user.name})} style={styles.container}>
            <Image source={{ uri: chat.user.image }} style={styles.image}/>
        
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>
                        {chat.user.name}
                    </Text>
                    <TextFormatDate dateTime={chat.lastMessage.createdAt}></TextFormatDate>
                </View>

                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage.text}</Text>
            </View>
        </Pressable>
    );

};

const TextFormatDate = ({ dateTime })  => {
    //se for hoje, mostrar horário da mensagem. se for até duas semanas, mostrar "x dias atrás". se for antes disso, mostrar data dd/mm/aaaa

    console.log("datetime: " + dateTime);

    var today = Date.now();
    var semanapassada = new Date();
    semanapassada.setDate(semanapassada.getDate() - 14);
    var lastMessageDate = new Date(dateTime);

    console.log("today: " + today);
    console.log("lastMessageDate: " + lastMessageDate);

    if(dayjs(lastMessageDate).format('DD/MM/YYYY') == dayjs(today).format('DD/MM/YYYY')){
        return <Text style={styles.subTitle}>{dayjs(lastMessageDate).format('HH:mm')}</Text>;
    }
    if((lastMessageDate.getTime() > semanapassada.getTime())){
        return <Text style={styles.subTitle}>{dayjs(lastMessageDate).fromNow(true)}</Text>;
    } 
        return <Text style={styles.subTitle}>{dayjs(lastMessageDate).format('DD/MM/YYYY')}</Text>;
    
};

 

const styles = StyleSheet.create({ 
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70
    },

    image: {
        width: 60, 
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },

    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lightgray"
    },

    row: {
        flexDirection: 'row',
        marginBottom: 5
    },

    name: {
        flex: 1,
        fontWeight: 'bold'
    },

    subTitle: {
        color: 'gray'
    },
});

export default ChatListItem;