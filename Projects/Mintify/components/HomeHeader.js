import { View, Text, Image, TextInput } from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.padding,
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
            width: 90,
            height: 25,
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
          Let's explore NFT's today!
        </Text>
      </View>

      <View style={{
        marginTop: SIZES.font,
      }}>
        <View style={{
          width: "100%",
          borderRadius: SIZES.font,
          backgroundColor: COLORS.gray,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.small - 2,
        }}>
          <Image />
          <TextInput />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
