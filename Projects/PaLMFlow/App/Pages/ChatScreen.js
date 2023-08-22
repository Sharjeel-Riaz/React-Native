import React, { useEffect, useState, useCallback } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { GiftedChat } from "react-native-gifted-chat";
import GlobalApi from "../Services/GlobalApi";

export default function ChatScreen() {
  const param = useRoute().params;
  const [messages, setMessages] = useState([]);
  const [selectedChatFace, setSelectedChatFace] = useState();

  useEffect(() => {
    setSelectedChatFace(param.selectedFace);
    setMessages([
      {
        _id: 1,
        text: "Hello, I'm " + param.selectedFace?.name + ".",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: param.selectedFace?.image,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    if (messages[0].text) {
      getBardResp(messages[0].text);
    }
  }, []);

  const getBardResp = (message) => {
    GlobalApi.getBardApi(message).then((resp) => {
      if (resp.data.resp[1].content) {
        const chatAPIResp = {
          _id: Math.random() * (9999999 - 1),
          text: resp.data.resp[1].content,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: param.selectedFace?.image,
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, chatAPIResp)
        );
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
