import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { assets } from "../constants";

const Login = () => {
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
        <Image
          style={{
            width: 200,
            height: 300,
            marginTop: -10,
          }}
          source={assets.nft}
        />
        <Image
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
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 48,
              letterSpacing: 2,
              marginTop: 250,
            }}
          >
            Login
          </Text>
        </View>

        {/* Login Form */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginRight: 16,
            marginLeft: 16,
            marginTop: 16,
          }}
        >
          <View
            style={{
              backgroundColor: "rgb(236, 238, 235)",
              width: "100%",
              padding: 16,
              marginTop: 30,
              borderRadius: 16,
            }}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View
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
          </View>

          <View
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
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 16,
            }}
          >
            <Text>Don't have an account? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "rgb(2 132 199)",
                }}
              >
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
