import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
export default class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            massageList:''
        }
    }

UNSAFE_componentWillMount(){
    let dbRef = firebase.database().ref(this.props.navigation.state.params.pastParametor).child('message');
    dbRef.on('child_added', (val) => {
        let group = val.val();

        console.log(group)
        if (group.groupid == this.props.navigation.state.params.pastParametor) {

            this.setState((prevState) => {
                return {
                    massageList: [...prevState.massageList, val.val()]
                }
            })
        }
})
}

    render() {
       // const { navigate } = this.props.navigation;
        // const { navigation } = this.props;
        // const user_name = navigation.getParam('test');
        return (
            <View>
                <Text style={{ fontSize: 40 }}>
                    group
                {/* {this.props.navigation.state.params.pastParametor}  */}
                    
        </Text>
            </View>
        )
    }
}
