import React from "react";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import RoundedButton from "@/app/components/RoundedButton";
import NativeDropdown from "@/app/components/NativeDropdown";

const Home = () => {
  const [balance, setBalance] = useState(1098);

  const onSendMoney = () => {
    alert("Send Money pressed");
  };

  const onRequestMoney = () => {
    alert("Request Money pressed");
  };

  const onBuy = () => {
    alert("Buy pressed");
  };

  const rowAbleButtons: { [key: string]: [string, string, () => void] } = {
    send: ["Add Money", "add", onSendMoney],
    request: ["Request Money", "refresh", onRequestMoney],
    buy: ["Buy", "cart", onBuy],
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance}</Text>
          <Text style={styles.currency}>$</Text>
        </View>
      </View>
      <View style={styles.actionRow}>
        {Object.entries(rowAbleButtons).map(
          ([key, [text, icon, onPress]], i) => (
            <RoundedButton text={text} icon={icon} onPress={onPress} key={i} />
          )
        )}
        <NativeDropdown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    marginTop: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 60,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 30,
    fontWeight: "500",
  },
  actionRow: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    gap: 20,
  },
});

export default Home;
