import { FlatList } from 'react-native'
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats.sort((a, b) => b.lastMessage.createdAt.localeCompare(a.lastMessage.createdAt))} 
      renderItem={({item}) => <ChatListItem chat={item}/>}
    />
  )
}

export default ChatsScreen