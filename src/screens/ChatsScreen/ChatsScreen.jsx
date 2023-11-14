import { FlatList } from 'react-native'
import chats from '../../../assets/data/chats.json';
import ChatListItem from '../../components/ChatListItem';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listChatRooms } from './queries';
import { useEffect, useState } from 'react';

const ChatsScreen = () => {
  const [chatRoom, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchDataRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      const response = await API.graphql(
        graphqlOperation(listChatRooms, { id: authUser.attributes.sub})
      );

      setChatRooms(response.data.getUser.ChatRooms.items);
    };

    fetchDataRooms();
  }, [])

  console.log("chat room ↓")
  //console.log(chatRoom);

  if(chatRoom != []){
    return (
    <FlatList
      data={chatRoom} 
      renderItem={({item}) => <ChatListItem chat={item.chatRoom}/>}
    />
  )
  }
}

export default ChatsScreen 