import { Camera, FlashMode } from "expo-camera";
import { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";

import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";

export default function CameraComponent({ setShowCamera }) {
  const [flash, setFlash] = useState(FlashMode.off);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
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
    <Camera className="min-h-full w-full" type={"back"} flashMode={flash}>
      <View className="m-10 flex-1 flex-row">
        <TouchableOpacity
          className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-slate-400"
          onPress={toggleCamera()}
        >
          <FontAwesome6 name="xmark" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute bottom-0 left-0 flex h-14 w-14 items-center justify-center rounded-full bg-slate-400"
          onPress={toggleFlash}
        >
          <FontAwesome name="flash" size={20} />
        </TouchableOpacity>
        {/* <View className="absolute left-5 top-80">
              <MaterialCommunityIcons
                name="scan-helper"
                size={360}
                color="white"
              />
            </View> */}
      </View>
    </Camera>
  );
}
