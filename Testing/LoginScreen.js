import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase';
import User from '../User';
import styles from '../constants/styles';
export default class LoginScreen extends React.Component {
  // static navigationOptions = {
  //   headerTintColor: 'blue',
  // header:null
  // };
  // static navigationOptions = {
  //   headerMode: 'none'
  // }
  // static navigationOptions= {
  //   headerVisible: false,
  // }
  state = {
    phone: '',
    name: '',

  }
  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('userPhone').then(val => {
      if (val) {
        this.setState({ phone: val })
      }
    })
  }
  submitForm = async () => {
    if (this.state.phone.length < 10) {
      Alert.alert("Error", 'Wrong phone number')
    }
    else if (this.state.name.length < 3) {
      Alert.alert("Error", 'Wrong name')

    }
    else {
      //save user data
      await AsyncStorage.setItem("userPhone", this.state.phone);
      User.phone = this.state.phone;
      User.name = this.state.name;
     firebase.database().ref('users/' + User.phone).set({ name: this.state.name });
      // firebase.auth().createUserWithEmailAndPassword(this.state.phone,this.state.name).then((u)=>{
      //   console.log('test of u',u);
      // }).catch((error)=>{
      //   console.log('error',error)
      // })
      this.props.navigation.navigate('HomeScreen');
    }
  }
  //   async removeItemValue() {
  //     try {
  //         await AsyncStorage.removeItem('userPhone');
  //         return true;
  //     }
  //     catch(exception) {
  //         return false;
  //     }
  // }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Phone number'
          keyboardType='number-pad'
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput
          placeholder='Name'
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}> Enter </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={this.removeItemValue}>
  <Text style={styles.btnText}> Enter </Text>
  </TouchableOpacity> */}
      </View>
    )
  }
}