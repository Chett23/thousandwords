import { Camera, FlashMode } from "expo-camera";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import tailwindColors from "../utils/tailwindColors";

export default function CameraComponent({ toggleCamera }) {
  const [flash, setFlash] = useState(FlashMode.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View className="flex-1 items-center justify-center bg-background-100">
        <Text className="text-center">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleFlash() {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.torch : FlashMode.off,
    );
  }

  return (
    <View className="h-full min-w-full">
      <Camera type={"back"} flashMode={flash}>
        <View className="m-10 flex-1 flex-row">
          <TouchableOpacity
            className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500"
            onPress={toggleFlash}
          >
            <FontAwesome
              name="flash"
              size={20}
              color={tailwindColors.text[900]}
            />
          </TouchableOpacity>
          <TouchableOpacity className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500">
            <Link href="/">
              <FontAwesome6
                name="xmark"
                size={20}
                color={tailwindColors.text[900]}
              />
            </Link>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
