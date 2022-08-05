import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, TextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import CardStatus from "../../components/CardStatus";
import CardMain from "../../components/CardMain";
import styles from "./styles";

// https://api.openweathermap.org/data/2.5/weather?q=Nairobi,KE&appid=ce1dd709128390b8ac3e1a7de8c34810

import { variables } from "../../theme";
import api from "../../services";
export interface Data {
  city: String;
  uf: String;
  temp: number;
  temp_min: number;
  temp_max: number;
}

const Home = () => {
  const [nameCity, setNameCity] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState<Data>({} as Data);

  async function handleCity() {
    return api
      .get(`?q=${nameCity}`)
      .then((res) =>
        setData({
          city: res.data.name,
          uf: res.data.sys.country,
          temp: res.data.main.temp,
          temp_min: res.data.main.temp_min,
          temp_max: res.data.main.temp_max,
        })
      )
      .catch((error) => {
        setData({} as Data);
        setError(true);
      });
  }

  useEffect(() => {
    if (nameCity === "") {
      return setError(false);
    }
  }, [nameCity]);

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
              placeholder="City"
              placeholderTextColor={variables.colors.white500}
              selectionColor={variables.colors.white500 + "18"}
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
              onPress={() => handleCity()}
            />
          </View>
        </View>
      </View>

      <View style={[styles.body, { marginTop: -132 }]}>
        {data.uf?.length > 0 ? (
          <CardMain data={data} />
        ) : (
          <CardStatus error={error} />
        )}
        <Text>More Info</Text>
      </View>
    </View>
  );
};

export default Home;