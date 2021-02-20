import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const HomeScreen = () => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source ={require("../assets/images/logo2.png")} />
            <Text style = {styles.heading}>Welcome to Krypto</Text>
            <Text style = {styles.description}>Invest Fake money in a sym crypto exchange that mimics real crypto currency trends.</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
    },
    image: {
        marginTop: 55,
        height: Dimensions.get("screen").height/2, 
        width: Dimensions.get("screen").width, 
        resizeMode: "cover"
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 10,
        marginHorizontal: 10,
    }
})
