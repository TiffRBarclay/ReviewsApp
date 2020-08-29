import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const DrawerContent = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" children={HomeStack} />
    <Drawer.Screen name="About" children={AboutStack} />
  </Drawer.Navigator>
);

export default DrawerContent;
