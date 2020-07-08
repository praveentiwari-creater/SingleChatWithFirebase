import React from 'react';
import {View,Text,SafeAreaView,TextInput,Alert,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import User from '../User';
import styles from '../constants/styles';
import firebase from 'firebase';
export default class ProfileScreen extends React.Component{
    state={
        name:User.name
    }
    
    handleChange= key => val => {
this.setState({[key]:val})
    } 

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('LoginScreen');
    }

    changeName= async ()=>{
if(this.state.name.length<3){
    Alert.alert('Error','Please Enter Valid Name');
}else if(User.name !== this.state.name){
    firebase.database().ref('users').child(User.phone).set({name:this.state.name});
    User.name=this.this.state.name;
    Alert.alert('Success','Name Changed Successful.');
}
    }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20}}>
        {User.phone}
        </Text>

        <Text style={{fontSize:20}}>
        {User.name}
        </Text>

        <TextInput 
        style={styles.input}
        value={this.state.name}
        onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.changeName}>
            <Text style={styles.btnText}>Change Name</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._logOut}>
            <Text style={styles.btnText}>Logoute</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}