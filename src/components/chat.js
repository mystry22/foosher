import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import IonIcons from 'react-native-vector-icons/Ionicons';

const ChatButton =()=>{
    return(
        <TouchableOpacity style={style.chatButton}>
            <IonIcons name='chatbox-ellipses-outline' size={28} color='#ffa500' />
            <Text style={{fontSize:18, color:'#ffa500', fontWeight:'400'}}> Chat</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    chatButton:{
        borderWidth:2,
        borderColor:'#ffa500',
        width:180,
        height:60,
        flexDirection:'row',
        borderRadius:50,
        padding:15,
        justifyContent: 'center'
    }
})

export default ChatButton;