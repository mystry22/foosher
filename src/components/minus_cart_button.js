import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const CartButtonMinus =()=>{
    return(
        <TouchableOpacity style={styles.button}>
            <AntDesign name='minus' size={18} color='#ffa500' />
        </TouchableOpacity>
    )
}

//'#ffa500'

export default CartButtonMinus;

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#ffffff' ,
        width:21,
        height:20,
        borderRadius:50,
        fontWeight:'600',
        padding:1
    }
})