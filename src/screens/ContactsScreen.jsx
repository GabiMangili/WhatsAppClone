import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';
import ContactListItem from '../components/ContactListItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';

const ContactsScreen = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result)=>{
      console.log(result);
      setUsers(result.data.listUsers?.items)
    })
  }, [])

  console.log(users);


  return (
    <View>
      <FlatList
      data={users.sort((a, b) => a.name.localeCompare(b.name))} 
      renderItem={({item}) => <ContactListItem user={item}/>}
    />
    </View>
  )
}

export default ContactsScreen

const styles = StyleSheet.create({})