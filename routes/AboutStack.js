import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../components/Header";

import About from "../screens/About";

const Stack = createStackNavigator();

const AboutStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="About"
      component={About}
      options={{
        headerTitle: ({ navigation }) => <Header navigation={navigation} />,
      }}
    />
  </Stack.Navigator>
);

export default AboutStack;
