import { View, Text } from "react-native";
import React from "react";

const skipButton = () => {
  return (
    <View>
      <Text className="text-mgray font-rregular text-[15px] absolute pt-10 right-0">
        Skip
      </Text>
    </View>
  );
};

export default skipButton;
