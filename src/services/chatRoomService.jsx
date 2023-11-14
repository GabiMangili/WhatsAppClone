import { API, Auth, graphqlOperation } from "aws-amplify";


export const getCommonChatUserWithUser = async (userID) => {

    const authUser = await Auth.currentAuthenticatedUser();
    
    //get all chat rooms of user1
    const response = await API.graphql(
        graphqlOperation(listChatRooms, {id: authUser.attributes.sub})
    )

    const chatRooms = response.data?.getUser?.ChatRooms.items || [];

    console.log(chatRooms);
    const chatRoom = chatRooms.find((item) => {
        item.chatRoom.users.items.some(user => item.user.id === userID)
    }
    );

    console.log(chatRoom);
        
    //get all chat rooms of user 2

    
    
    //remove chat rooms with more than 2 users


    
    //get the common chat rooms

};

export const listChatRooms = /* GraphQL */ `
query GetUser($id: ID!) {
    getUser(id: $id) {
          id
          ChatRooms {
            items {
              chatRoom {
                id
                users {
                  items {
                    user {
                      id
                    }
                  }
                }
              }
            }
          }
        }
    }      
  `;