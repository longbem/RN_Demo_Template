import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Canvas,
  Circle,
  vec,
  Paint,
  Group,
  Text as TextSkia,
  Skia,
  useFont,
  TextBlob,
  Path,
  LinearGradient,
} from '@shopify/react-native-skia';
import {BarChart} from './bar-chart';

const width = 256;
const height = 256;

export const ChartScreen = () => {
  const strokeWidth = 10;
  const c = vec(width / 2, height / 2);
  const r = width / 6;

  // const font = useFont(require('./my-font.ttf'), 30);
  // if (font === null) {
  //   return null;
  // }

  const onPressAnimation = () => {};

  // const blob = Skia.TextBlob.MakeFromText('Hello World!', null);

  const colors = ['#61DAFB', '#fb61da', '#dafb61', '#61fbcf'];

  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={onPressAnimation}>
        <Text>Go to Chart</Text>
      </TouchableOpacity>

      <BarChart />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
  },
});
