import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { Link } from "expo-router";

import tailwindColors from "../utils/tailwindColors";

import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function App() {
  const [showSearch, setShowSearch] = useState(false);
  var ScrollableArray = Array(26).fill("Book Title");

  return (
    <View className="flex-1 items-center justify-center bg-background-100">
      <StatusBar style="dark" />
      <View className="relative min-h-full w-full">
        <View className="flex h-10 w-full flex-row justify-between bg-background-300 px-4">
          <View className="flex flex-row justify-start gap-6">
            {/* Past Scans */}
            <TouchableOpacity>
              <Fontisto
                name="bookmark-alt"
                size={24}
                color={tailwindColors.text[900]}
              />
            </TouchableOpacity>
            {/* Search */}
            <TouchableOpacity>
              <Fontisto
                onPress={() => setShowSearch((prev) => !prev)}
                name="search"
                size={24}
                color={tailwindColors.text[900]}
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-end">
            {/* Account */}
            <Fontisto
              name="person"
              size={24}
              color={tailwindColors.text[900]}
            />
          </View>
        </View>
        {showSearch && <SearchBar />}
        <ScrollView>
          {ScrollableArray.map((item, index) => (
            <View
              key={index}
              className="h-16 w-full border-b-2 border-primary-500 px-3 pt-5"
            >
              <Text className="text-text-900 ">{item}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity className="absolute bottom-0 right-0 m-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500">
          <Link href="/Camera">
            <FontAwesome
              name="camera"
              size={20}
              color={tailwindColors.text[900]}
            />
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}
