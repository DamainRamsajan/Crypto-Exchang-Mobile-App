import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CoinDetailsScreen = () => {
    const [coinData, setCoinData] = useState ({
        id: "1",
        name: "Bitcoin",
        image: "https://e7.pngegg.com/pngimages/169/25/png-clipart-bitcoin-computer-icons-logo-cryptocurrency-bitcoin-logo-gold.png",
        symbol: "BTC",
        valueChange1H: .25,
        valueChange1D: -.95,
        valueChange7D: 1.75,
        currentPrice: 38458.74,
        amount: 1,
    });

    const onBuy = () => {

    }

    const onSell = () => {
        
    }

    return (
        <View style = {styles.root}>
    
            <View style = {styles.profileContainer}>
                <View style = {styles.left}>
                    <Image style = {styles.profileImage} source = {{uri: "https://e7.pngegg.com/pngimages/169/25/png-clipart-bitcoin-computer-icons-logo-cryptocurrency-bitcoin-logo-gold.png"}}/>
                    <View style = {styles.userDetails}>
                        <Text style = {styles.name}>Bitcoin</Text>
                        <Text style = {styles.email}>BTC</Text>
                    </View>                    
                </View>
                <View style = {styles.rightContainer}>
                    <FontAwesome name="star" size={24} color="blue" /> 
                    <Text style = {styles.networth}>Watch</Text>
                </View>                
            </View>

            <View style = {styles.currentPriceContainer}>
                <View style = {styles.labelContainer}>
                    <Text style = {styles.label}>Current Price</Text>
                    <Text style = {styles.value}>${coinData.currentPrice}</Text>
                </View>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.priceChangeLabel}>1 Hour</Text>
                    <Text style = {{fontSize: 20, color: coinData.valueChange1H > 0 ? "#399a70" : "#f10000"}}>{coinData.valueChange1H > 0 && "+"}{coinData.valueChange1H}%</Text>
                </View>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.priceChangeLabel}>1 Day</Text>
                    <Text style = {{fontSize: 20, color: coinData.valueChange1D > 0 ? "#399a70" : "#f10000"}}>{coinData.valueChange1D > 0 && "+"}{coinData.valueChange1D}%</Text>
                </View>

                <View style = {styles.labelContainer}>
                    <Text style = {styles.priceChangeLabel}>7 Days</Text>
                    <Text style = {{fontSize: 20, color: coinData.valueChange7D > 0 ? "#399a70" : "#f10000"}}>{coinData.valueChange7D > 0 && "+"} {coinData.valueChange7D}%</Text>
                </View>
            </View>

            <View style = {styles.positionRow}>
                <Text>Position</Text>
                <View style = {styles.positionDetails}>
                    <Text>{coinData.symbol} {coinData.amount} (${coinData.amount*coinData.currentPrice})</Text>                
                </View>
            </View>

            <View style = {styles.buttonRow}>
                <Pressable style = {[styles.button, {backgroundColor: "#5AB858"}]} onPress={onBuy}>
                    <Text style = {styles.buttonText}>Buy</Text>
                </Pressable>

                <Pressable style = {[styles.button, {backgroundColor: "#DE4545"}]} onPress={onSell}>
                    <Text style = {styles.buttonText}>Sell</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default CoinDetailsScreen

const styles = StyleSheet.create({
    root: {
        width: "100%",
    },
    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width,
        padding: 10,
        marginTop: 5,
    },
    left: {
        flexDirection: "row",
        alignItems: "center"
    }, 
    profileImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 125
    },
    userDetails: {
        marginLeft: 10
    },
    name: {
        fontSize: 16,
        fontWeight: "bold"
    },
    email: {
        color: "grey"
    },
    networth: {
        fontSize: 12,
        fontWeight: "bold"
    },
    description: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    rightContainer: {
        alignItems: "center"
    },
    currentPriceContainer: {
        flexDirection: "row",
        width: Dimensions.get("screen").width-20,
        justifyContent: "space-between",
        marginLeft: 10,
        marginTop: 10
    },
    labelContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        fontSize: 12,
        color: "grey"
    },
    value: {
        fontSize: 22,
        fontWeight: "bold"
    }, 
    priceChangeLabel: {
        fontSize: 12,
        color: "grey"
    },
    priceChange: {
        fontSize: 20,
    },
    positionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 14,
    },
    positionDetails: {
        flexDirection: "row",
    },    
    buttonRow: {        
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 14,
        marginTop: 413
    },
    button: {        
        width: 170,
        height: 48,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 24,
    }
})
