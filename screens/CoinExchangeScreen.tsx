import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Pressable, Alert, KeyboardAvoidingView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoinExchangeScreen = () => {
    const [coinAmount, setCoinAmount] = useState ("");
    const [coinUSDValue, setCoinUSDValue] = useState ("");

    const maxUSD = 100000;

    const route = useRoute ();

    const isBuy = route?.params?.isBuy;
    const coinData = route?.params?.coinData;   
    
    useEffect(() => {
        const amount = parseFloat(coinAmount)
        if (!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        setCoinAmount(amount.toString())
        setCoinUSDValue((coinData?.currentPrice * amount).toString())
        
    }, [coinAmount]);

    useEffect(() => {
        const amount = parseFloat(coinUSDValue)
        if (!amount && amount !== 0) {
            setCoinAmount("");
            setCoinUSDValue("");
            return;
        }
        setCoinUSDValue(amount.toString())
        setCoinAmount((amount/coinData?.currentPrice ).toString())
        
    }, [coinUSDValue]);

    const placeOrder = () => {
        if (isBuy && parseFloat(coinUSDValue) > maxUSD){
            Alert.alert(`Not enough USD Money. Max = ${maxUSD}`)
        }
        if (!isBuy && coinAmount > coinData?.amount){
            Alert.alert(`Not enough ${coinData?.symbol} Coins. Max = ${coinData?.amount}`)
        }
    };

    return (
    <KeyboardAvoidingView behavior = {"padding"} style = {{flex: 1}} keyboardVerticalOffset = {100}>
            <Image style = {styles.image} source ={require("../assets/images/exchange.jpg")} />
            <Text style={styles.heading}>{isBuy? "Buy " : "Sell "} {coinData?.name}</Text>
            <Text style = {styles.description}>1 {coinData?.symbol} = ${coinData?.currentPrice} USD</Text>    

            <View style ={styles.inputGroup}>
                <View style = {styles.inputContainer}>
                    <TextInput 
                        keyboardType = "decimal-pad"
                        placeholder = "0"
                        value = {coinAmount}
                        onChangeText = {setCoinAmount}
                    />
                    <Text>{coinData?.symbol}</Text>
                    {/* <View style = {styles.caretContainer}>
                        <Pressable >
                            <Ionicons name="ios-caret-up" size={18} color="black" />
                        </Pressable>

                        <Pressable>
                            <Ionicons name="ios-caret-down" size={18} color="black" />
                        </Pressable>    
                    </View> */}
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
            <Text style = {{alignSelf: "flex-end", marginRight: 76}}>Max: ${maxUSD} </Text> 
            <View >
                <Pressable style = {styles.button} onPress={placeOrder}>
                    <Text style = {styles.buttonText}>Place Order</Text>
                </Pressable>
            </View>
            <View style = {{flex: 1}}/>
        </KeyboardAvoidingView>
    )
}

export default CoinExchangeScreen

const styles = StyleSheet.create({
    image: {
        marginTop: -14,
        height: 280, 
        width: Dimensions.get("screen").width, 
        resizeMode: "cover",
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
        // marginBottom: 10
    },
    inputGroup: {
        flexDirection: "row", 
        justifyContent: "space-between",
        width: Dimensions.get("screen").width-20, 
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "lightgrey",
        alignItems: "center",
        width: 160,
        height: 45,
        padding: 10,
    },
    button: {        
        width: 360,
        height: 48,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5AB858",
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 24,
    },
    caretContainer: {
        marginLeft: 70
    }
})
