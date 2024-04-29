import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import Camera from "./src/components/Camera";
import tailwindColors from "./src/utils/tailwindColors";

import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Home from "./src/pages/Home";

export default function App() {
  const [showCamera, setShowCamera] = useState(false);

  function toggleCamera() {
    setShowCamera((current) => !current);
  }

  return (
    <View className="bg-background-100 flex-1 items-center justify-center">
      <StatusBar style="auto" />
      {showCamera ? (
        <Camera toggleCamera={toggleCamera} />
      ) : (
        <View className="relative min-h-full w-full">
          <Home />
          <TouchableOpacity
            className="bg-primary-500 absolute bottom-0 right-0 m-10 flex h-14 w-14 items-center justify-center rounded-full"
            onPress={toggleCamera}
          >
            <FontAwesome
              name="camera"
              size={20}
              color={tailwindColors.text[900]}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
