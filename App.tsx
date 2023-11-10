
import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from './src/navigation';
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { useEffect } from 'react';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App(): JSX.Element {

  useEffect(() => {
    const syncUser = async ()=>{
      //get auth user
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});

      //query the database using auth user id
      const userData = await API.graphql(
          graphqlOperation(getUser, {id: authUser.attributes.sub})
        );
        
        // @ts-ignore
        if(userData.data.getUser){
          console.log("user already exists in database ");
          return;
        }
        
      //if not exists, create one
      console.log("ESPLITE: " + (authUser.attributes.email).split('@')[0]);

      const newUser = {
        id: authUser.attributes.sub,
        name: (authUser.attributes.email).split('@')[0],
        status: 'Hey there!'
      };

      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, {input: newUser})
      )
    }
    syncUser();
  }, [])

  return (
      <View style={styles.container}>
        <Navigator/>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: 'center',
    color: 'black',
    paddingVertical: 5
  }
});

export default withAuthenticator(App);
