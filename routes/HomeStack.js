import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#444",
      headerStyle: {
        backgroundColor: "#eee",
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: "Game Zone" }}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={{ title: "Review Details" }}
    />
  </Stack.Navigator>
);

export default HomeStack;
