import { StatusBar } from "expo-status-bar";
import { Camera, FlashMode } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function App() {
  const [flash, setFlash] = useState(FlashMode.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="flex-1 items-center justify-center bg-slate-600">
        <Text className="text-center">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission}>Grant Permission</Button>
      </View>
    );
  }

  function toggleFlash() {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.torch : FlashMode.off,
    );
  }

  function toggleCamera() {
    setShowCamera((current) => !current);
  }

  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <StatusBar style="auto" />
      {showCamera ? (
        <Camera toggleCamera={toggleCamera}/>
      ) : (
        <TouchableOpacity
          className="absolute bottom-0 right-0 m-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-400"
          onPress={toggleCamera}
        >
          <FontAwesome name="camera" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}
