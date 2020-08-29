import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/Header";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const Stack = createStackNavigator();

const HomeStack = (props) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetails}
      options={{ title: "Review Details" }}
    />
  </Stack.Navigator>
);

export default HomeStack;
