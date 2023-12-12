import {
  Canvas,
  SkiaMutableValue,
  Skia,
  Path,
  Text,
  useFont,
  useValue,
  runTiming,
} from '@shopify/react-native-skia';
import React from 'react';
import {View, StyleSheet, PixelRatio} from 'react-native';
import {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface CircularProgressProps {
  backgroundColor: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const radius = PixelRatio.roundToNearestPixel(130);
const STROKE_WIDTH = 12;

export const LoadingDonut: React.FC<CircularProgressProps> = ({}) => {
  const font = useFont(
    require('../../../assets/fonts/Montserrat-Bold.otf'),
    50,
  );

  const targetPercentage = 85 / 100;
  const animationState = useValue(0);

  const innerRadius = radius - STROKE_WIDTH / 2;
  const targetText = `${targetPercentage * 100}`;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  const width = targetText;

  React.useEffect(() => {
    animateChart();
  }, []);

  const animateChart = () => {
    animationState.current = 0;
    console.log('animationState.current', animationState.current);
    runTiming(animationState, targetPercentage, {
      duration: 1250,
      easing: Easing.inOut(Easing.cubic),
    });
  };
  return (
    <View style={styles.container}>
      <Canvas style={styles.container}>
        <Path
          path={path}
          color="blue"
          style="stroke"
          strokeJoin="round"
          strokeWidth={STROKE_WIDTH}
          strokeCap="round"
          // start={180}
          end={animationState}
        />
        <Text
          x={innerRadius - width / 2}
          y={radius + STROKE_WIDTH + 10}
          text={`${targetText}%`}
          font={font}
          opacity={animationState}
        />
      </Canvas>
    </View>
  );
};
