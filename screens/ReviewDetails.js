import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

const ReviewDetails = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{item.title}</Text>
      <Text>{item.rating}</Text>
      <Text style={globalStyles.paragraph}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewDetails;
