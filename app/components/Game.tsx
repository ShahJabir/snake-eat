import * as React from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../styles/colors";

export default function Game() {
  const handleGesture = (event: any) => {
    const { translationX, translationY } = event.nativeEvent;
    console.log(`(x:${translationX}, y:${translationY})`);
    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        // Handle right swipe
        console.log("Moving Right");
      } else {
        // Handle left swipe
        console.log("Moving Left");
      }
    } else {
      if (translationY > 0) {
        // Handle down swipe
        console.log("Moving Down");
      } else {
        // Handle up swipe
        console.log("Moving Up");
      }
    }
  };
  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}>
        {/* Game content goes here */}
      </SafeAreaView>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
