import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const AddButton =()=>{
    return(
        <TouchableOpacity style={style.chatButton}>
            
            <Text style={{fontSize:18, color:'#ffffff', textAlign:'center',fontWeight:'400'}}> Chat</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    chatButton:{
        borderWidth:2,
        borderColor:'#ffa500',
        backgroundColor:'#ffa500',
        width:180,
        height:60,
        borderRadius:50,
        padding:15,
        justifyContent: 'center'
    }
})

export default AddButton;