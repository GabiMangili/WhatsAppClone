import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';
import ContactListItem from '../components/ContactListItem';

const ContactsScreen = () => {
  return (
    <View>
      <FlatList
      data={chats.sort((a, b) => a.user.name.localeCompare(b.user.name))} 
      renderItem={({item}) => <ContactListItem user={item.user}/>}
    />
    </View>
  )
}

export default ContactsScreen

const styles = StyleSheet.create({})