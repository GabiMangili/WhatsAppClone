
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
import ChatScreen from './src/screens/ChatScreen';
import Navigator from './src/navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } }) 

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {

  return (
      <View style={styles.container}>
        <Navigator/>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    color: Colors.light,
    paddingVertical: 5
  }
});

export default withAuthenticator(App);
