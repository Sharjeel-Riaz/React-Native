import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 110,
            height: 50,
            marginLeft: -5,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        >
          <Image
            source={assets.person03}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.medium,
            color: COLORS.white,
          }}
        >
          Hello, Victoria 👋🏻
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's explore NFTs today!
        </Text>

        <View
          style={{
            flexDirection: "row-reverse",
            marginTop: -35,
            marginBottom: 15,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row-reverse",
              width: 30,
              height: 30,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Image
              source={assets.exit}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: SIZES.font,
          marginBottom: SIZES.base,
        }}
      >
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
              marginLeft: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            placeholderTextColor={COLORS.white}
            style={{
              flex: 1,
              color: COLORS.white,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
