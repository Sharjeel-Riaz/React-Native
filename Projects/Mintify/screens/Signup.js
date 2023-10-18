import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import { assets } from "../constants";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar style="light" />
      <Image
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        source={assets.background}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          position: "absolute",
        }}
      >
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{
            width: 200,
            height: 300,
            marginTop: -10,
          }}
          source={assets.nft}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          style={{
            width: 125,
            height: 225,
            marginTop: -10,
          }}
          source={assets.nft}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          justifyContent: "space-around",
          paddingTop: 40,
          paddingBottom: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 48,
              letterSpacing: 2,
              marginTop: 250,
            }}
          >
            Sign Up
          </Animated.Text>
        </View>

        {/* Login Form */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginRight: 16,
            marginLeft: 16,
            marginTop: 10,
          }}
        >
          <Animated.View
            entering={FadeInDown.duration(1000).springify()}
            style={{
              backgroundColor: "rgb(236, 238, 235)",
              width: "100%",
              padding: 16,
              marginTop: 30,
              borderRadius: 16,
            }}
          >
            <TextInput placeholder="Username" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{
              backgroundColor: "rgb(236, 238, 235)",
              width: "100%",
              padding: 16,
              marginTop: 15,
              borderRadius: 16,
            }}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={{
              backgroundColor: "rgb(236, 238, 235)",
              width: "100%",
              padding: 16,
              marginTop: 15,
              borderRadius: 16,
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "rgb(56 189 248)",
                padding: 16,
                borderRadius: 16,
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(800).duration(1000).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text
                style={{
                  color: "rgb(2 132 199)",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
