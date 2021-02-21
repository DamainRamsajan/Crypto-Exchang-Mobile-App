import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

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
        <View>
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <FontAwesome name="viacoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>viacoin</Text>
                        <Text style = {styles.coinAbr}>VIA</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$8,000</Text>
                    <Text style = {styles.coinCost}>$1,612</Text>
                </View>
            </View>
        </View>
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
