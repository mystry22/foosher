import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartButton =()=>{
    return(
        <TouchableOpacity style={styles.button}>
            <AntDesign name='plus' size={18} color='#fff' />
        </TouchableOpacity>
    )
}

//'#ffa500'

export default CartButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#ffa500' ,
        width:21,
        height:20,
        borderRadius:50,
        fontWeight:'600',
        padding:1
    }
})