import {
  View,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import ChatFaceData from "../Services/ChatFaceData";

export default function HomeScreen() {
  //   let [fontsLoaded, fontError] = useFonts({
  //     Poppins_400Regular,
  //   });

  const [chatFaceData, setChatFaceData] = useState([]);
  const [selectedChatFaceData, setSelectedChatFaceData] = useState([]);

  useEffect(() => {
    setChatFaceData(ChatFaceData);
    setSelectedChatFaceData(ChatFaceData[0]);
  }, []);

  return (
    <View style={{ alignItems: "center", paddingTop: 90 }}>
      <Text style={[{ color: selectedChatFaceData.primary }, { fontSize: 35 }]}>
        Hello there,
      </Text>
      <Text
        style={[
          { color: selectedChatFaceData.primary },
          {
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "Roboto",
          },
        ]}
      >
        I am {selectedChatFaceData.name}.{" "}
      </Text>
      <Image
        source={{ uri: selectedChatFaceData.image }}
        style={{
          width: 150,
          height: 150,
          marginTop: 25,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          marginTop: 50,
        }}
      >
        How can I help you?
      </Text>

      <View
        style={{
          marginTop: 60,
          backgroundColor: "#F3F3F3",
          alignItems: "center",
          height: 130,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <FlatList
          data={chatFaceData}
          horizontal={true}
          renderItem={({ item }) =>
            selectedChatFaceData.id != item.id && (
              <TouchableOpacity
                style={{
                  margin: 15,
                }}
                onPress={() => setSelectedChatFaceData(item)}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{ width: 50, height: 50 }}
                />
              </TouchableOpacity>
            )
          }
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 20,
            color: "#B0B0B0",
          }}
        >
          Choose your favourite Chat Buddy!
        </Text>
      </View>

      <TouchableOpacity
        style={[
          { backgroundColor: selectedChatFaceData.primary },
          {
            padding: 17,
            width: Dimensions.get("screen").width * 0.6,
            alignItems: "center",
            borderRadius: 100,
            marginTop: 60,
          },
        ]}
        onPress={() => {
          console.log("Clicked");
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#FFF",
          }}
        >
          Let's Chat
        </Text>
      </TouchableOpacity>
    </View>
  );
}
