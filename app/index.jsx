import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { SIZES } from "../constants/theme";
import { skipButton, doneButton } from "../components";
import { done } from "../constants/icons";

const slides = [
  {
    id: 1,
    title: "The Breakdown 🎧",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet hac arcu sed pellentesque nunc eget.",
    image: require("../assets/images/music-1.png"),
    pageNum: "1",
  },
  {
    id: 2,
    title: "Practice And Performances 🎛️",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet hac arcu sed pellentesque nunc eget.",
    image: require("../assets/images/music-2.png"),
    pageNum: "2",
  },
  {
    id: 3,
    title: "Buckle Up 🚀‍",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet hac arcu sed pellentesque nunc eget.",
    image: require("../assets/images/music-3.png"),
    pageNum: "3",
  },
];

export default function App() {
  const [setshowHomePage, setSetshowHomePage] = useState(false);

  if (!setshowHomePage) {
    return (
      <SafeAreaView className="flex justify-start h-full bg-mbg">
        <AppIntroSlider
          data={slides}
          renderItem={({ item }) => {
            return (
              <View>
                <View className="flex flex-row text-center">
                  <Text className="text-white text-[15px] text-center ">
                    {item.pageNum} <Text className="text-mgray">| 3 </Text>
                  </Text>
                  <Text className="text-mgray text-end">Skip</Text>
                </View>
                <Image
                  source={item.image}
                  style={{
                    width: SIZES.width - 80,
                    height: 400,
                  }}
                  // className="w-[300] h-[284]"
                  resizeMode="contain"
                />
                <View>
                  <Text className="text-start">{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            );
          }}
          renderNextButton={() => {
            return skipButton();
          }}
          renderDoneButton={() => {
            return doneButton();
          }}
          renderPagination={() => {
            return ;
          }}
          onDone={() => setSetshowHomePage(true)}
        />
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 items-center justify-center ">
      <Text>Route To HomePage</Text>
      <StatusBar style="auto" />
    </View>
  );
}
