import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AuthContext from "./App/Context/AuthContext";
import Login from "./App/Pages/Login";
import HomeScreen from "./App/Pages/HomeScreen";
import Home from "./App/Pages/Home";

export default function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // To handle side effects
  }, []);

  return (
    <View>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {userData ? <HomeScreen /> : <Login />}
      </AuthContext.Provider>
    </View>
  );
}
