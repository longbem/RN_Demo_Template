import {
  Canvas,
  Path,
  runTiming,
  Skia,
  Text,
  useComputedValue,
  useFont,
  useValue,
} from '@shopify/react-native-skia';
import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Easing} from 'react-native-reanimated';
import * as d3 from 'd3';

interface DataPoint {
  label: string;
  value: number;
}

const data: DataPoint[] = [
  {label: 'Jan', value: 50},
  {label: 'Fed', value: 200},
  {label: 'Mar', value: 150},
  {label: 'Apr', value: 350},
  {label: 'May', value: 50},
  {label: 'Jun', value: 100},
  {label: 'Jul', value: 300},
];

const GRAPH_MARGIN = 20;
const GRAPH_BAR_WIDTH = 20;

const CanvasHeight = 300;
const CanvasWidth = 300;

const graphHeight = CanvasHeight - 2 * GRAPH_MARGIN;
const graphWidth = CanvasWidth - 2;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  canvas: {
    height: CanvasHeight,
    width: CanvasWidth,
  },
});

export const BarChart: React.FC<any> = () => {
  const font = useFont(
    require('../../../assets/fonts/Montserrat-Bold.otf'),
    10,
  );
  const animationState = useValue(0);

  const xDomain = data.map((xDataPoint: DataPoint) => xDataPoint.label);
  const xRange = [0, graphWidth];
  const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);

  const yDomain = [
    0,
    d3.max(data, (yDataPoint: DataPoint) => yDataPoint.value),
  ];
  const yRange = [0, graphHeight];
  const y = d3.scaleLinear().domain(yDomain).range(yRange);

  const path = useComputedValue(() => {
    const newPath = Skia.Path.Make();

    data.forEach((dataPoint: DataPoint) => {
      const rect = Skia.XYWHRect(
        x(dataPoint.label) - GRAPH_BAR_WIDTH / 2,
        graphHeight,
        GRAPH_BAR_WIDTH,
        y(dataPoint.value * animationState.current) * -1,
      );

      const rrect = Skia.RRectXY(rect, 0, 0);
      newPath.addRRect(rrect);
    });

    return newPath;
  }, [animationState]);

  React.useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    animationState.current = 0;

    runTiming(animationState, 1, {
      duration: 1600,
      easing: Easing.inOut(Easing.exp),
    });
  };

  if (!font) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={path} color="#4B56D2" />
        {data.map((dataPoint: DataPoint) => (
          <Text
            key={dataPoint.label}
            font={font}
            color="red"
            x={x(dataPoint.label) - 10}
            y={CanvasHeight - 25}
            text={dataPoint.label}
          />
        ))}
      </Canvas>
    </View>
  );
};
