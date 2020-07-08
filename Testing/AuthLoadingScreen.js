import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import User from '../User';
export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    UNSAFE_componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyAHRtZcv2fx_HK-lfqvpMdkUdW70dBE9Ng",
            authDomain: "chatwithfirebase-fcee3.firebaseapp.com",
            databaseURL: "https://chatwithfirebase-fcee3.firebaseio.com",
            projectId: "chatwithfirebase-fcee3",
            storageBucket: "chatwithfirebase-fcee3.appspot.com",
            messagingSenderId: "106642907744",
            appId: "1:106642907744:web:b8257f84f4915661341905",
            measurementId: "G-MTJP8KDMRN"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // firebase.analytics();

    }

    _bootstrapAsync = async () => {
        User.phone = await AsyncStorage.getItem('userPhone');
        this.props.navigation.navigate(User.phone ? 'HomeScreen' : 'LoginScreen');
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle='default' />
            </View>
        )
    }
}