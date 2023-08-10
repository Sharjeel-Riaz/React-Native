import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const screenWidth = Dimensions.get("window").width;
const bannerImageHeight = Dimensions.get("window").height / 3.2;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: screenWidth,
    height: bannerImageHeight,
  },
  containerRound: {
    height: Dimensions.get("window").height - (bannerImageHeight - 20),
    paddingTop: 30,
    marginTop: -20,
    backgroundColor: "#FFF",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 20,
  },
  gradientContainer: {
    padding: 20,
    margin: 50,
    marginTop: 30,
    borderRadius: 20,
    elevation: 5,
  },
  logoImage: {
    width: 350,
    height: 80,
    margin: 40,
  },
  button: {
    backgroundColor: "transparent",
    justifyContent: "center",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/login-banner.jpg")}
        style={styles.bannerImage}
      />
      <View style={styles.containerRound}>
        <Image
          source={require("../Assets/logo.png")}
          style={styles.logoImage}
        />
        <Text
          style={{
            textAlign: "center",
            marginTop: 80,
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Login / Signup
        </Text>

        <LinearGradient
          colors={["#eb3941", "#f15e64", "#e14e53", "#e2373f"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientContainer}
        >
          <View style={styles.button}>
            <AntDesign
              name="google"
              size={25}
              color="white"
              style={{
                marginRight: 12,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#FFF",
              }}
            >
              Continue with Google
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
