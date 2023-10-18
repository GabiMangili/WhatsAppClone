
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
import ChatsScreen from './src/screens/ChatsScreen';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  return (
      <View style={styles.container}>
        <ChatsScreen/>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    color: Colors.light,
    paddingVertical: 10
  }
});

export default App;
