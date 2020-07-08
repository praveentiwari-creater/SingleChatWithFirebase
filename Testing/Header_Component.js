import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import User from '../User';
class Header_Component extends React.Component{
  constructor(props){
    super(props);
  }
// const Header_Component = (props) => {
render(){
    return(
      <View style={{flexDirection:'row',borderWidth:2,borderColor:'darkblue',justifyContent:'space-between'}}>
         <TouchableOpacity onPress={this.props.onPress1}>
       <Image source={require("../IMAGE/back_arrow.png")} style={{width:50,height:50}}/>
       </TouchableOpacity>
     
    <Text style={{marginTop:10,fontSize:20}}> {this.props.text}</Text>
   
    <TouchableOpacity onPress={this.props.onPress3}>
       <Text style={{marginTop:10,fontSize:20}}> {this.props.text1}</Text>   
           </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onPress2}>
       <Image source={require("../IMAGE/contact.png")} style={{width:50,height:50}}/>
       </TouchableOpacity>
    
      </View>
    )
    }
   
}
export default Header_Component;
