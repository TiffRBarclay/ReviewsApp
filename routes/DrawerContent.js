import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import About from "../screens/About";

const Drawer = createDrawerNavigator();

const DrawerContent = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" children={HomeStack} />
    <Drawer.Screen name="About" component={About} />
  </Drawer.Navigator>
);

export default DrawerContent;
