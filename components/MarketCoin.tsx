import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface MarketCoinProps {
    marketCoin: {
        image: String,
        name: String,
        symbol: String,
        valueChange: Number,
        valueUSD: Number
    }
}

const MarketCoin = (props: MarketCoinProps) => {

    const { marketCoin: {
        image, name, symbol, valueChange, valueUSD
    }} = props;

    return (
        <TouchableWithoutFeedback>
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    {/* <FontAwesome name="viacoin" color="orange" size = {50}/> */}
                    <Image style = {styles.image} source = {{uri:image}} />
                    <View>
                        <Text style = {styles.coinName}>{name}</Text>
                        <Text style = {styles.coinAbr}>{symbol}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>${valueUSD}</Text>
                    <Text style = {{color: valueChange > 0 ? "#399a703" : "#f10000"}}>{valueChange > 0 && "+"}{valueChange} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MarketCoin

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("screen").width, 
        marginBottom: 20,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    coinName: {
        marginLeft: 10,
        fontWeight: "bold",
    },
    coinAbr: {
        marginLeft: 10,
        color: "grey"
    },
    coinTotal: {
        marginRight: 10,
        fontWeight: "bold",
        fontSize: 16,
    },
    coinCost: {
        marginRight: 10,
        fontSize: 12,
        color: "grey"
    }
})
