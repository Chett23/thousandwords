import React, { useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";

import tailwindColors from "../utils/tailwindColors";
import SearchBar from "../utils/SearchBar";

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  var ScrollableArray = Array(26).fill("Book Title");
  return (
    <View className="h-full w-full">
      <View className="bg-background-300 flex h-28 w-full flex-row justify-between px-4 pt-16">
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
          <Fontisto name="person" size={24} color={tailwindColors.text[900]} />
        </View>
      </View>
      {showSearch && <SearchBar />}
      <ScrollView>
        {ScrollableArray.map((item, index) => (
          <View
            key={index}
            className="border-primary-500 h-16 w-full border-b-2 px-3 pt-5"
          >
            <Text className="text-text-900 ">{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
