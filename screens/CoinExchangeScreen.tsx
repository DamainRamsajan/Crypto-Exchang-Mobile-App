import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, } from 'react-native';

const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState ("");
    const [coinUSDValue, setCoinUSDValue] = useState ("");

    const route = useRoute ();

    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;   
    
    useEffect(() => {
        const amount = parseFloat(coinAmount)
        if (!amount) {
            setCoinAmount("0");
            return;
        }
       setCoinUSDValue((coinData?.currentPrice * amount).toString())
        
    }, [coinAmount])

    return (
        <View>
            <Image style = {styles.image} source ={require("../assets/images/exchange.jpg")} />
            <Text style={styles.heading}>{isBuy? "Buy " : "Sell "} {coinData.name}</Text>
            <Text style = {styles.description}>1 {coinData.symbol} = ${coinData.currentPrice} USD</Text>    

            <View style ={styles.inputGroup}>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        keyboardType = "decimal-pad"
                        placeholder = "0"
                        value = {coinAmount}
                        onChangeText = {setCoinAmount}
                    />
                    <Text>{coinData.symbol}</Text>
                </View>

                <Text>=</Text>

                <View style = {styles.inputContainer}>
                    <TextInput 
                        placeholder = "0"
                        keyboardType = "decimal-pad"
                        value = {coinUSDValue}
                        onChangeText = {setCoinUSDValue}
                    />
                    <Text>USD</Text>
                </View>
            </View>
        </View>
    )
}

export default CoinExchangeScreen

const styles = StyleSheet.create({
    image: {
        marginTop: -12,
        height: Dimensions.get("screen").height/3, 
        width: Dimensions.get("screen").width, 
        resizeMode: "contain",
    },
    heading:{
        alignSelf: "center",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10
    },
    description: {
        fontSize: 14,
        // fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    inputGroup: {
        flexDirection: "row", 
        justifyContent: "space-between",
        width: Dimensions.get("screen").width-20, 
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "lightgrey",
        alignItems: "center",
        width: 160,
        padding: 10,
    },
})
