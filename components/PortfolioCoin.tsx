import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface PortfolioCoinProps {
    portfolioCoin: {
        image: String,
        name: String,
        symbol: String,
        amount: Number,
        valueUSD: Number
    }
}

const PortfolioCoin = (props: PortfolioCoinProps) => {

    const { portfolioCoin: {
        image, name, symbol, amount, valueUSD
    }} = props;

    return (
        <TouchableWithoutFeedback>
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <Image style = {styles.image} source = {{uri:image}} />
                    <View>
                        <Text style = {styles.coinName}>{name}</Text>
                        <Text style = {styles.coinAbr}>{symbol}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>${amount}</Text>
                    <Text style = {styles.coinCost}>${valueUSD}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PortfolioCoin

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
