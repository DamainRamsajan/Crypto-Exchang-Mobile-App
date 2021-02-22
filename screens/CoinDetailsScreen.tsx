import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CoinDetailsScreen = () => {
    const [coinData, setCoinData] = useState ({
        id: "1",
        name: "Bitcoin",
        image: "https://e7.pngegg.com/pngimages/169/25/png-clipart-bitcoin-computer-icons-logo-cryptocurrency-bitcoin-logo-gold.png",
        symbol: "BTC",
        valueChange: -.75,
        currentPrice: 1512
    })
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
                <View>
                    <Text style = {styles.label}>Current Price</Text>
                    <Text style = {styles.value}>{coinData.currentPrice}</Text>
                </View>

                <View>
                    <Text style = {styles.priceChangeLabel}>1 Hour</Text>
                    <Text style = {styles.priceChange}>{coinData.currentPrice}</Text>
                </View>

                <View>
                    <Text style = {styles.priceChangeLabel}>1 Day</Text>
                    <Text style = {styles.priceChange}>{coinData.currentPrice}</Text>
                </View>

                <View>
                    <Text style = {styles.priceChangeLabel}>7 Days</Text>
                    <Text style = {styles.priceChange}>{coinData.currentPrice}</Text>
                </View>

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
        flexDirection: "row"
    },
    label: {

    },
    value: {

    }, 
    priceChangeLabel: {

    },
    priceChange: {

    },
})
