import { StyleSheet, View } from "react-native";
import Login from "./App/Pages/Login";
import HomeScreen from "./App/Pages/HomeScreen";

export default function App() {
  return (
    <View>
      <Login />
      {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
