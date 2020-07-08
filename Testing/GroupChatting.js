import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from 'firebase/app';
// import User from '../User';
import styles from '../constants/styles';
require('firebase/auth');

export default class GroupChatting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            GroupName: '',
            GroupID: null,
            Member: User.phone,
            UserName: '',
            // props.route.params.phone,
            MemberName: User.name
            //  props.route.params.name
        }
    }
    //   var userName = firebase.auth().currentUser.email
    componentDidMount(){
        let userName = firebase.auth().currentUser.email;
        console.log("email =====>", userName);
        this.setState({
            UserName : userName
        })
    }
    save = () => {
   

            console.log("username ",this.state.UserName); //console kr
            console.log("group name", this.state.GroupName);
            console.log("group id ", this.state.GroupID);
          //  console.log("member name ", this.state.MemberName);

            var refgroup = firebase.database().ref('Group')  //error 123
            let groupdata = {
                GROUP_ID:this.state.GroupID,
                GROUP_NAME: this.state.GroupName,
                MEMBER_ID: this.state.Member,
                // rider_1_Name:
                // this.state.MemberName,
                //  //this.state.rider.name
            }
            refgroup.push(groupdata);
            // refgroup.set({
            //     GroupName : this.state.GroupName,
            //     MemberId : this.state.Member, //moblie numb? yes 
            //     GroupMemberName : this.state.userName, /// 
            // }).then((docRef)=>{
            //     console.log("document ==",docRef);
            // })
            // .catch((error)=>{
            //     console.log('error====>',error);
            // })
         //var refgroup = firebase.database().ref('Group' + this.state.GroupID)
        // var refgroup=firebase.database().ref('users/' + User.phone).set({ name: this.state.name });
       
         //refgroup.push();

       // this.props.navigation.navigate("Groups", { pastParametor: this.state.GROUP_ID, });

    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <SafeAreaView>
                <ScrollView>


                    <TextInput
                        placeholder="Enter group ID"
                        style={{ borderWidth: 2, borderColor: 'blue', width: 300, height: 50, marginTop: 20 }}
                        onChangeText={(GroupID) => this.setState({ GroupID })}
                    />
                    <TextInput
                        placeholder="Enter group Name"
                        style={{ borderWidth: 2, borderColor: 'blue', width: 300, height: 50, marginTop: 20 }}
                        onChangeText={(GroupName) => this.setState({ GroupName })}
                    />

                    <TouchableOpacity onPress={this.save} style={{ width: 100, height: 40, marginTop: 80, marginLeft: 100, backgroundColor: 'blue' }}>
                        <Text style={{ fontSize: 30 }}>Submit</Text>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    }
}
