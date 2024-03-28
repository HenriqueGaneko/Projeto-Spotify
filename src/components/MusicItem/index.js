import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MusicItem({ music, onPlayPause, isPlaying, navigation }) {
    return (
        <View style={styles.musicItem}>
            <Image source={{ uri: music.album_image }} style={styles.albumImage} />
            <View style={styles.musicInfo}>
                <TouchableOpacity onPress={() => { }}>
                    <View>
                        <Text style={isPlaying ? styles.playingTitle : styles.musicTitle}>
                            {music.title}
                        </Text>
                        <Text style={styles.musicGroup}>{music.group}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPlayPause}>
                    <FontAwesome
                        name={isPlaying ? "pause" : "play"}
                        color="#fff"
                        size={16} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    musicItem: {
        backgroundColor: "#212121",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 4,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 4,
    },
    musicItemButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    albumImage: {
        width: 72,
        height: 72,
        borderRadius: 4,
    },
    musicInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        flex: 1,
    },
    musicTitle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
    },
    playingTitle: {
        color: "#1DB954",
        fontSize: 20,
        fontWeight: "700",
    },
    musicGroup: {
        color: "#b3b3b3",
        fontSize: 16,
    },
});

