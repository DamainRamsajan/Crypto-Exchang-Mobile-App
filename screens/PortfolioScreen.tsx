import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Entypo, MaterialIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const PortfolioScreen = () => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source ={require("../assets/images/portfolio.png")} />
            <Text style = {styles.heading}>Portfolio Balance</Text>
            <Text style = {styles.description}>$72,000</Text>

            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <FontAwesome5 name="bitcoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>Bitcoin</Text>
                        <Text style = {styles.coinAbr}>BTC</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$37,000</Text>
                    <Text style = {styles.coinCost}>$1,312</Text>
                </View>
            </View>

            
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <FontAwesome5 name="bitcoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>Bitcoin</Text>
                        <Text style = {styles.coinAbr}>BTC</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$37,000</Text>
                    <Text style = {styles.coinCost}>$1,312</Text>
                </View>
            </View>

            
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <FontAwesome5 name="bitcoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>Bitcoin</Text>
                        <Text style = {styles.coinAbr}>BTC</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$37,000</Text>
                    <Text style = {styles.coinCost}>$1,312</Text>
                </View>
            </View>

            
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <FontAwesome5 name="bitcoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>Bitcoin</Text>
                        <Text style = {styles.coinAbr}>BTC</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$37,000</Text>
                    <Text style = {styles.coinCost}>$1,312</Text>
                </View>
            </View>
        </View>
    )
}

export default PortfolioScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
    },
    image: {
        marginTop: 55,
        height: Dimensions.get("screen").height/3, 
        width: Dimensions.get("screen").width, 
        resizeMode: "contain",
    },
    heading: {
        fontSize: 14,
        marginTop: 10,
    },
    description: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width, 
        marginBottom: 10,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    coinName: {
        marginLeft: 10,
    },
    coinAbr: {
        marginLeft: 10,
    },
    coinTotal: {
        marginRight: 10,
    },
    coinCost: {
        marginRight: 10,
    }
})
