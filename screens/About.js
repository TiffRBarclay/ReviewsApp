import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";

const About = (props) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
