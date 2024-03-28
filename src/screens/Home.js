import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({ navigation }) {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const item = {
    id: 1,
    title: "Highway to hell",
    group: "AC/DC",
    album_image:
      "data:image/jpeg;base64,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"
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem
        isPlaying={() => currentPlaying == item.id}
        music={item}
        navigation={navigation}
        onPlayPause={() => { }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  }
});