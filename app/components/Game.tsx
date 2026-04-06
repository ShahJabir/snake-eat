import * as React from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../styles/colors";
import { GestureEventType } from "../types/types";

const SNAAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREAMENT = 10;

export default function Game(): React.JSX.Element {
  const handleGesture = (event: GestureEventType) => {
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
