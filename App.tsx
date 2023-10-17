
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ChatListItem from './src/components/ChatListItem';



type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  return (
      <View
          style={styles.container}>
          <ChatListItem/>
        </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.light,
  }
});

export default App;