import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { StatusBar } from "expo-status-bar";
import {
  GoogleSocialButton,
  FacebookSocialButton,
} from "react-native-social-buttons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import Services from "../shared/Services";
import { assets } from "../constants";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  // Setting up google authentication
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);

  const [googleRequest, googleResponse, googlePromptAsync] =
    Google.useAuthRequest({
      androidClientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
    });

  useEffect(() => {
    if (googleResponse?.type == "success") {
      setAccessToken(googleResponse.authentication.accessToken);
      getUserData();
    }
  }, [googleResponse]);

  // To get user data
  const getUserData = async () => {
    try {
      const resp = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${googleResponse.authentication.accessToken}`,
        },
      });

      const user = await resp.json();
      setUserInfo(user);
      setUserData(user);
      await Services.setUserAuth(user);
      // To check your stored response
      console.log(user);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  // Setting up facebook authentication
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_FACEBOOK_CLIENT_ID,
  });

  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
        setUserData(userInfo);
        await Services.setUserAuth(userInfo);
        // To check your stored response
        console.log(JSON.stringify(response, null, 2));
        console.log(userInfo);
      })();
    }
  }, [response]);

  const facebookPromptAsync = async () => {
    const result = await promptAsync();
    if (result.type !== "success") {
      console.log(result);
      alert("Uh oh, something went wrong!");
      return;
    }
  };

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
            Login
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
              marginTop: -15,
              borderRadius: 16,
            }}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
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
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
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
              onPress={() => console.log("Login Pressed")}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("Signup")}>
              <Text
                style={{
                  color: "rgb(2 132 199)",
                }}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <View
            style={{
              flexDirection: "col",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
              }}
            >
              OR
            </Text>
            <Animated.View
              entering={FadeInDown.delay(800).duration(1000).springify()}
              style={{
                flexDirection: "col",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <GoogleSocialButton
                onPress={() => googlePromptAsync()}
                buttonViewStyle={{
                  borderRadius: 8,
                  elevation: 5,
                  width: "80%",
                  height: "auto",
                  padding: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                  shadowColor: "#171717",
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
                logoStyle
                textStyle={{
                  color: "black",
                  fontSize: 18,
                }}
                buttonText="Continue with Google"
              />
              <FacebookSocialButton
                onPress={facebookPromptAsync}
                buttonViewStyle={{
                  borderRadius: 8,
                  elevation: 5,
                  width: "70",
                  height: "auto",
                  padding: 5,
                  paddingTop: 10,
                  paddingBottom: 10,
                  alignItems: "center",
                  shadowColor: "#171717",
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
                logoStyle
                textStyle={{
                  color: "white",
                  fontSize: 18,
                }}
                buttonText="Continue with Facebook"
              />
            </Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
