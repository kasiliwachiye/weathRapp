import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const search = require("../../../assets/search.png");
const notfound = require("../../../assets/notfound.png");

interface Props {
  error: Boolean;
}

const CardStatus: React.FC<Props> = ({ error }) => {
  return (
    <View style={styles.contentCard}>
      <Image
        style={styles.img}
        source={error ? notfound : search}
        resizeMode="contain"
      />
      {error ? (
        <View>
          <Text style={styles.title}>💩</Text>
          <Text style={styles.text}>
            No results{`\n`}found from your search.
          </Text>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Search.</Text>
          <Text style={styles.text}>
            search by city name{`\n`}​​to see details.
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardStatus;
