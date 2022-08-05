import React from "react";
import { View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";
import { variables } from "../../theme";

interface Props {
  nameIcon: String;
  title: String;
  value: String;
}

const CardDetail: React.FC<Props> = ({
  nameIcon,
  title,
  value,
}) => {
  return (
    <View style={styles.contentCard}>
      <View
        style={{
          flex: 7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon
          name={`${nameIcon}`}
          color={variables.colors.orange500}
          size={32}
        />
      </View>
      <View style={{ flex: 5 }}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CardDetail;