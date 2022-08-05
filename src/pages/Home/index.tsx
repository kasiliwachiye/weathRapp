import React, { useState } from "react";
import { View, Text, StatusBar, TextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import CardMain from "../../components/CardMain";
import styles from "./styles";

// https://api.openweathermap.org/data/2.5/weather?q=Nairobi,BR&appid=ce1dd709128390b8ac3e1a7de8c34810

import { variables } from "../../theme";
import api from "../../services";

const Home = () => {
  const [nameCity, setNameCity] = useState("");

  async function handleCity(name: String) {
    return api.get(`?q=Nairobi,KE`).then((res) => console.log(res.data));
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={variables.colors.orange500}
        barStyle="light-content"
      />
      <View style={styles.cardHeader}>
        <View style={styles.header}>
          <Icon
            name="refresh-ccw"
            size={22}
            color={variables.colors.white500}
          />
          <Text style={styles.headerTitle}>Weather Forecast</Text>
          <Icon
            name="toggle-left"
            size={22}
            color={variables.colors.white500}
          />
        </View>
        {/* Input search */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <View style={{ width: "78%" }}>
            <Icon
              style={styles.iconInput}
              name="search"
              size={22}
              color={variables.colors.white500}
            />
            <TextInput
              placeholder="City Name"
              placeholderTextColor={variables.colors.white500}
              autoCapitalize="words"
              style={styles.input}
              onChangeText={(value) => setNameCity(value)}
              value={nameCity}
            />
          </View>

          <View style={{ marginLeft: "4%", width: "18%" }}>
            <Icon
              style={styles.searchBtn}
              name="navigation"
              size={22}
              color={variables.colors.white500}
              onPress={() => handleCity("Nairobi,KE")}
            />
          </View>
        </View>
      </View>

      <View style={[styles.body, { marginTop: -132 }]}>
        <CardMain />

        <Text>Additional Information</Text>
      </View>
    </View>
  );
};

export default Home;