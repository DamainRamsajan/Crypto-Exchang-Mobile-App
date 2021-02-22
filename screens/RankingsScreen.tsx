import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import UserDetails from '../components/UserDetails';

const userDetails = [
    {
        id: "1",
        name: "Damain Ramsajan",
        image: "https://lh3.googleusercontent.com/-vjTYprSlfpk/X-xO4fzx7nI/AAAAAAAAA0c/znVeQepoBdcCl-xBK-R1-iLgiqZwEGChACEwYBhgLKtMDAL1OcqxdmWXxTnzoYvUqunfXJtj6zxMfIJrjRyPJHyoy83dQsc3l09ccMMLs8N53oH8sn84Rt1qatZXrUvT_S7Qztl8l4ejmdQK-lnUrbN78Wv1IWuRzereQCPIg72CHc0jW96zQbzkZaCN2F5j7DhW8M4ZpfCHdQhIIAh7Dg3N16VoiYqHjS4eZsqGrRoPgb1p64wG7xCyfQR34MczqwG9k1e2XvAA214Wolbsxtzi-LQZjiXNENP8yigWd1tBgvjUHcRURdQnGRg6mz5LRP07nGBfu6LCcP7XsUo7bDVU5L5pEKquW4w9ntZB6prCd2LAu58ytd7q6qRcmIAGeaNpXe6ghU-zjg0muojv_zYzbyJ6PZsT9lN8ISR7kPYH_EfAcVYezcCQ3kDQmyO_QcLHvTTSwfloGqSsh-sn9he9S1RqxT7H2b9cf5jOWN_aOGx6v2VdvFAG8bdJYkyXBf-ce8qjvqYeZmW_cwGAy8F3kcLFKFFuVef8V2dORKQT8SQhZTNBmusU1EgUZplEtfl2PTbsLhmWlvmbbsBV5Afri8m7lqwFPbjtrye-ocdbkBNNxCMaJlIA83Rf3tT3mRBHKZfor_4PQ3xxeT4O83iZpfBwwjv3MgQY/w140-h140-p/DPR.png",
        netWorth: 72000,
        rank: 1
    },    
    {
        id: "2",
        name: "Bob Marley",
        image: "https://i.ytimg.com/vi/g3t6YDnGXAc/hqdefault.jpg",
        netWorth: 64000,
        rank: 2
    },   
    {
        id: "3",
        name: "Pryanka Chopra",
        image: "https://www.thenews.com.pk//assets/uploads/updates/2020-03-19/631462_3231801_12A-Priyanka-Chopra_updates.jpg",
        netWorth: 52000, 
        rank: 3
    },   
    {
        id: "4",
        name: "Mr. Bean",
        image: "https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg",
        netWorth: 36000,
        rank: 4
    } 
]

const RankingsScreen = () => {
    return (
        <ScrollView >
            <Image style = {styles.image} source ={require("../assets/images/rankings.jpg")} />
            <Text style = {styles.description}>Rankings</Text>            
            <FlatList 
                data = {userDetails}
                renderItem = {({item}) => <UserDetails userDetails = {item}/>}
            />
        </ScrollView>
    )
}

export default RankingsScreen

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

