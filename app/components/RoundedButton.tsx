import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

type RoundedButtonProps = {
  text: string;
  icon: typeof Ionicons.defaultProps;
  onPress?: () => void;
};

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  icon,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        <Ionicons name={icon} size={30} color={Colors.dark} />
      </View>
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.dark,
    textAlign: "center",
  },
});

export default RoundedButton;
