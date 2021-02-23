import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import PortfolioCoin from '../components/PortfolioCoin';
import { ScrollView } from 'react-native-gesture-handler';
import MarketCoin from '../components/MarketCoin';

const marketCoins = [
    {
        id: "1",
        name: "Bitcoin",
        image: "https://e7.pngegg.com/pngimages/169/25/png-clipart-bitcoin-computer-icons-logo-cryptocurrency-bitcoin-logo-gold.png",
        symbol: "BTC",
        valueChange: .23,
        valueUSD: 1312
    },
    {
        id: "2",
        name: "Ethereum",
        image: "https://banner2.cleanpng.com/20201213/pzf/transparent-ethereum-icon-cryptocurrency-icon-5fd5c1f798d4d1.019405991607844343626.jpg",
        symbol: "ETH",
        valueChange: 1.7,
        valueUSD: 1912
    },
    {
        id: "3",
        name: "Litecoin",
        image: "https://cdn3.iconfinder.com/data/icons/currency-and-cryptocurrency-signs/64/cryptocurrency_blockchain_Litecoin_LTC-512.png",
        symbol: "LTC",
        valueChange: -1.4,
        valueUSD: 1512
    },
    {
        id: "4",
        name: "Viacoin",
        image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/Viacoin-icon.png",
        symbol: "VIA",
        valueChange: .82,
        valueUSD: 9126
    },
    {
        id: "5",
        name: "Ripple",
        image: "https://p1.hiclipart.com/preview/227/391/638/circle-icon-bitcoin-icon-cryptocurrency-icon-line-icon-ripple-icon-template-icon-yellow-body-jewellery-png-clipart.jpg",
        symbol: "XRP",
        valueChange: 1.2,
        valueUSD: 7725
    },
    {
        id: "6",
        name: "Litecoin",
        image: "https://cdn3.iconfinder.com/data/icons/currency-and-cryptocurrency-signs/64/cryptocurrency_blockchain_Litecoin_LTC-512.png",
        symbol: "LTC",
        valueChange: -.75,
        valueUSD: 1512
    },
    {
        id: "7",
        name: "Viacoin",
        image: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/Viacoin-icon.png",
        symbol: "VIA",
        valueChange: -.45,
        valueUSD: 9122
    },
    {
        id: "8",
        name: "Ripple",
        image: "https://p1.hiclipart.com/preview/227/391/638/circle-icon-bitcoin-icon-cryptocurrency-icon-line-icon-ripple-icon-template-icon-yellow-body-jewellery-png-clipart.jpg",
        symbol: "XRP",
        valueChange: .67,
        valueUSD: 7724
    },
    
    
]

const MarketScreen = () => {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <Image style = {styles.image} source ={require("../assets/images/market.jpg")} />
            <Text style = {styles.description}>Market</Text>            
            <FlatList 
                data = {marketCoins}
                renderItem = {({item}) => <MarketCoin marketCoin = {item}/>}
            />
        </ScrollView>
    )
}

export default MarketScreen

const styles = StyleSheet.create({
    image: {
        marginTop: 30,
        height: Dimensions.get("screen").height/3, 
        width: Dimensions.get("screen").width, 
        resizeMode: "contain",
    },
    heading: {
        fontSize: 14,
        alignSelf: "center"
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

