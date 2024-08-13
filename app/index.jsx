import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

import { SIZES,COLORS } from "../constants/theme";
import { nextButton, skipButton, doneButton } from "../components";
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
              <View className="px-7">
                <View className="text-center pt-10 relative">
                  <Text className="text-white font-rregular text-[15px] text-center ">
                    {item.pageNum} <Text className="text-mgray">| 3 </Text>
                  </Text>
                  <Text className="text-mgray font-rregular text-[15px] absolute pt-10 right-0">
                    Skip
                  </Text>
                </View>
                <View className="flex mt-[55px] mb-[27px] items-center">
                  <Image
                    source={item.image}
                    style={{
                      width: SIZES.width - 80,
                      height: 284,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View className="gap-[10px]">
                  <Text className="text-white text-[32px] font-rbold">
                    {item.title}
                  </Text>
                  <Text className="text-mgray text-[15px] w-80 font-rregular ">
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          }}
          renderNextButton={() => {
            return nextButton();
          }}
          renderDoneButton={() => {
            return doneButton();
          }}
          activeDotStyle={{
            backgroundColor: COLORS.active,
            width: 50,
          }}
          dotStyle={{
            backgroundColor: COLORS.inactive,
          }}
          renderSkipButton={() => {
            return skipButton();
          }}
          // showSkipButton={{
          //   show: true,
          //   position: "bottom",
          // }}
          onDone={() => setSetshowHomePage(true)}
        />
        <Text className="text-mgray text-[10px] absolute right-[44%] bottom-8">
          by
          <Text className="text-primary"> nehtek</Text>
        </Text>
        <StatusBar style="light" />
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
