import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import User from '../User';
import styles from '../constants/styles';
import Header_Component from './Header_Component';
export default class HomeScreen extends React.Component {
    state = {
        users: [],

    }

    UNSAFE_componentWillMount() {
        let dbRef = firebase.database().ref('users');
        dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            if(person.phone===User.phone){
                User.name=person.name
            }else{
            this.setState((prevState) => {
                return {
                    users: [...prevState.users, person]

                }
            })
            }
        })

       // let groupRef = firebase.database().ref("")
    }

    
    renderRow = ({ item }) => {
        return (

            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChatScreen', item)}
                style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 25 }}>
                    {item.name}

                </Text>

            </TouchableOpacity>

        );
    }

    render() {
        console.log('state====>',this.state.users)
        return (
            <SafeAreaView>
                <Header_Component onPress1={this.USER1} text={"Chats"} text1={'Group'} onPress3={this.USER3} onPress2={this.USER2} />
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderRow}
                    keyExtractor={(item) => item.phone}
                />
            </SafeAreaView>
        )
    }

    USER1 = () => {
        this.props.navigation.navigate('AuthLoadingScreen');
    }
    USER2 = () => {
        this.props.navigation.navigate('ProfileScreen');
    }
    USER3 = () => {
        this.props.navigation.navigate('GroupChatting', this.state.users);
    }
}