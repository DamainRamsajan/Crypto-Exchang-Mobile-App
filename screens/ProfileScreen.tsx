import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from "react-native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    id: 1,
    name: "Damain Ramsajan",
    email: "peterdramsajan@gmail.com",
    image:
      "https://lh3.googleusercontent.com/-vjTYprSlfpk/X-xO4fzx7nI/AAAAAAAAA0c/znVeQepoBdcCl-xBK-R1-iLgiqZwEGChACEwYBhgLKtMDAL1OcqxdmWXxTnzoYvUqunfXJtj6zxMfIJrjRyPJHyoy83dQsc3l09ccMMLs8N53oH8sn84Rt1qatZXrUvT_S7Qztl8l4ejmdQK-lnUrbN78Wv1IWuRzereQCPIg72CHc0jW96zQbzkZaCN2F5j7DhW8M4ZpfCHdQhIIAh7Dg3N16VoiYqHjS4eZsqGrRoPgb1p64wG7xCyfQR34MczqwG9k1e2XvAA214Wolbsxtzi-LQZjiXNENP8yigWd1tBgvjUHcRURdQnGRg6mz5LRP07nGBfu6LCcP7XsUo7bDVU5L5pEKquW4w9ntZB6prCd2LAu58ytd7q6qRcmIAGeaNpXe6ghU-zjg0muojv_zYzbyJ6PZsT9lN8ISR7kPYH_EfAcVYezcCQ3kDQmyO_QcLHvTTSwfloGqSsh-sn9he9S1RqxT7H2b9cf5jOWN_aOGx6v2VdvFAG8bdJYkyXBf-ce8qjvqYeZmW_cwGAy8F3kcLFKFFuVef8V2dORKQT8SQhZTNBmusU1EgUZplEtfl2PTbsLhmWlvmbbsBV5Afri8m7lqwFPbjtrye-ocdbkBNNxCMaJlIA83Rf3tT3mRBHKZfor_4PQ3xxeT4O83iZpfBwwjv3MgQY/w140-h140-p/DPR.png",
    netWorth: 72000,
  });

  const signOut = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={require("../assets/images/profile.jpg")}
      />
      <Text style={styles.description}>Profile</Text>

      <View style={styles.profileContainer}>
        <View style={styles.left}>
          <Image style={styles.profileImage} source={{ uri: user.image }} />
          <View style={styles.userDetails}>
            <Text style={styles.name}>Damain Ramsajan</Text>
            <Text style={styles.email}>peterdramsajan@gmail.com</Text>
          </View>
        </View>
        <Text style={styles.networth}>$72000</Text>
      </View>
      <Pressable style={styles.pressable} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

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
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 125,
  },
  userDetails: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    color: "grey",
  },
  networth: {
    fontWeight: "bold",
  },
  image: {
    marginTop: 30,
    height: Dimensions.get("screen").height / 3,
    width: Dimensions.get("screen").width,
    resizeMode: "contain",
  },
  description: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  pressable: {
    alignItems: "center",
    marginTop: 260,
    alignSelf: "center",
    width: 120,
    height: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
