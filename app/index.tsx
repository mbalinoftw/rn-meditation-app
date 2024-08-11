import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import "../constants/main.css";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import beachImg from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

export default function HomeScren() {
  return (
    <View className="flex-1">
      <ImageBackground source={beachImg} resizeMode="cover" className="flex-1">
        <LinearGradient className="flex-1" colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
            <View>
              <Text className="text-4xl font-bold text-center text-white">Simple Meditation</Text>
              <Text className="mt-3 text-2xl text-center text-regular text-white">
                Simplifying meditation for everyone
              </Text>
            </View>
            <View>
              <CustomButton title="Get started" onPress={() => {}} />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
