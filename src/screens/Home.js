import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Plus from '../components/plus_cart_button';
import Minus from '../components/minus_cart_button';
import ChatButton from '../components/chat';
import AddButton from "../components/add_button";

const Home = () => {
    const imageLink = require('../assets/chicken.png')
    return (
        <SafeAreaView>

            <View style={styles.top}>
                <ImageBackground source={imageLink} style={{ width: '100%', height: 300 }} >
                    <View style={styles.row_bar}>
                        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 15 }}>
                            <AntDesign name='arrowleft' size={28} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 15 }}>
                            <AntDesign name='shoppingcart' size={28} />
                        </TouchableOpacity>

                    </View>
                </ImageBackground>
            </View>

            <View style={styles.introCont}>

                <View>
                    <Text style={styles.introText}>
                        Grilled Cheese Salad
                    </Text>
                    <Text style={styles.introText}>With cream</Text>
                </View>


                <View style={styles.buttonArea}>
                    <Plus />
                    <Text>1</Text>
                    <Minus />
                </View>
            </View>

            <View style={styles.rkl}>
                <View style={styles.items}>
                    <Entypo name='location-pin' color='#ffa500' size={18} />
                    <Text style={{ color: '#dedddb', fontSize: 15 }}> 2.3km</Text>
                </View>
                <View style={styles.items}>
                    <Entypo name='star' color='#ffa500' size={18} />
                    <Text style={{ color: '#dedddb', fontSize: 15 }}> 4.7 Ratings</Text>
                </View>
                <View style={styles.items}>
                    <Octicons name='stack' color='#ffa500' size={18} />
                    <Text style={{ color: '#dedddb', fontSize: 15 }}>  20-40 Min</Text>

                </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: '700', color: '#000000', paddingLeft: 10 }}>Description</Text>

            <Text style={{fontSize:16, letterSpacing:1,padding:10,}}>
                Originating from Cyprus, semisoft and slightly nutty hallaumi cheese
                resists melting when heated, so you can luxuriate Read More...
            </Text>

            <Image source={require('../assets/location.png')} style={{width:'100%', height:100, padding:10 }} />

            <View style={{flexDirection:'row',padding:10, justifyContent:'space-between'}}>
             <ChatButton />
             <AddButton />
            </View>

        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 280,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    top_bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    row_bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    introCont: {
        flexDirection: 'row',
        marginTop: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    introText: {
        fontSize: 22,
        fontWeight: '800',
        color: '#000000'
    },
    buttonArea: {
        backgroundColor: '#dedddb',
        width: '30%',
        height: 45,
        flexDirection: 'row',
        borderRadius: 50,
        padding: 10,
        justifyContent: 'space-around'
    },

    rkl: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

