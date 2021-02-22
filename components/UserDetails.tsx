import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export interface UserDetailsProps {
    userDetails: {
        image: String,
        name: String,
        netWorth: Number
        rank: Number
    }
}

const UserDetails = (props: UserDetailsProps) => {

    const { userDetails: {
        image, name, netWorth, rank
    }} = props;

    return (
        <TouchableWithoutFeedback>
            <View style = {styles.rowContainer}>
                <View style = {styles.leftContainer}>
                    <Text style = {styles.rank}>{rank}</Text>
                    <Image style = {styles.image} source = {{uri:image}} />
                    <View>
                        <Text style = {styles.coinName}>{name}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.coinTotal}>${netWorth}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default UserDetails

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
    rank: {
        fontSize: 18,
        width: 20,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: "cover",
        borderRadius: 250
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
