import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Testing/LoginScreen';
import HomeScreen from './Testing/HomeScreen';
import AuthLoadingScreen from './Testing/AuthLoadingScreen';
import ChatScreen from './Testing/ChatScreen';
import Header_Component from './Testing/Header_Component';
import ProfileScreen from './Testing/ProfileScreen';
import GroupChatting from './Testing/GroupChatting';
import Groups from './Testing/Groups';

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>


          <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />

          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ title: 'Profile' }} />

          <Stack.Screen name="ChatScreen" component={ChatScreen}
            options={({ route }) => ({ title: route.params.name })} />

          <Stack.Screen name="LoginScreen" component={LoginScreen}
            options={{ headerShown: false }} />



          {/* <Stack.Screen name="GroupChatting" component={GroupChatting} />
          <Stack.Screen name="Groups" component={Groups} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  USER = () => {
    console.log("navigation", this.props);
    //this.props.navigation.navigate('ProfileScreen');
  }
};


//App=HomeScreen
//Auth=LoginScreen


// options={{ title: 'Chats', headerRight: props => <Header_Component onPres={this.USER}/> }} 