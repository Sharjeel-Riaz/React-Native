import { useEffect, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Simulate a user authentication process
    setTimeout(() => {
      const resp = {
        /* your user data */
      };
      if (resp) {
        setUserData(resp);
      } else {
        setUserData(null);
      }
      setLoading(false); // Set loading to false after fetching the data
    }, 1000);
  }, []);

  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded || loading) return null; // Don't render the app until the fonts and user data are loaded

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={userData ? "Home" : "Login"}
        >
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
