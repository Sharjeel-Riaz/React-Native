import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AuthContext from "./App/Context/AuthContext";
import Services from "./App/Shared/Services";
import Login from "./App/Pages/Login";
import HomeScreen from "./App/Pages/HomeScreen";

export default function App() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    Services.getUserAuth().then((resp) => {
      if (resp) {
        setUserData(resp);
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <View>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {userData ? <HomeScreen /> : <Login />}
      </AuthContext.Provider>
    </View>
  );
}
