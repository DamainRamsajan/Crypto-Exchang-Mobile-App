import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import PortfolioCoin from '../components/PortfolioCoin';

const portfolioCoins = [
    {
        id: "1",
        name: "Bitcoin",
        image: "https://e7.pngegg.com/pngimages/169/25/png-clipart-bitcoin-computer-icons-logo-cryptocurrency-bitcoin-logo-gold.png",
        symbol: "BTC",
        amount: 37000,
        valueUSD: 1312
    },
    {
        id: "2",
        name: "Ethereum",
        image: "https://banner2.cleanpng.com/20201213/pzf/transparent-ethereum-icon-cryptocurrency-icon-5fd5c1f798d4d1.019405991607844343626.jpg",
        symbol: "ETH",
        amount: 17000,
        valueUSD: 1912
    },
    {
        id: "3",
        name: "Litecoin",
        image: "https://cdn3.iconfinder.com/data/icons/currency-and-cryptocurrency-signs/64/cryptocurrency_blockchain_Litecoin_LTC-512.png",
        symbol: "LTC",
        amount: 10000,
        valueUSD: 1512
    }
]

const PortfolioScreen = () => {
    return (
        <View style = {styles.container}>
            <Image style = {styles.image} source ={require("../assets/images/portfolio.png")} />
            <Text style = {styles.heading}>Portfolio Balance</Text>
            <Text style = {styles.description}>$72,000</Text>

            <FlatList 
                data = {portfolioCoins}
                renderItem = {({item}) => <PortfolioCoin portfolioCoin = {item}/>}
            />

            {/* <View style = {styles.rowContainer}>
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
                    <FontAwesome5 name="ethereum" color="black" size = {70}/>
                    <View>
                        <Text style = {styles.coinName}>Ethereum</Text>
                        <Text style = {styles.coinAbr}>ETH</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$17,000</Text>
                    <Text style = {styles.coinCost}>$1,912</Text>
                </View>
            </View>

            
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <MaterialCommunityIcons name="litecoin" color="orange" size = {50}/>
                    <View>
                        <Text style = {styles.coinName}>Litecoin</Text>
                        <Text style = {styles.coinAbr}>BTC</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>$10,000</Text>
                    <Text style = {styles.coinCost}>$1,512</Text>
                </View>
            </View>

            
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
            </View> */}
        </View>
    )
}

export default PortfolioScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        
    },
    image: {
        marginTop: 10,
        height: Dimensions.get("screen").height/3, 
        width: Dimensions.get("screen").width, 
        resizeMode: "contain",
    },
    heading: {
        fontSize: 14,
        // marginTop: 10,
    },
    description: {
        fontSize: 34,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
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
