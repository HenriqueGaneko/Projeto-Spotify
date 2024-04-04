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
      "https://www.grindstore.com/cdn/shop/files/100827-front.jpg?v=1691430619",
      album: "Highway to Hell",
      year: 1970,
      genre: "Heavy Metal",
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