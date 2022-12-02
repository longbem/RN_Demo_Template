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
      <View style={styles.center}>
        <Canvas style={{width, height}}>
          {/* <Group style="stroke" strokeWidth={10} color={'#61fbcf'}> */}
          {/* <LinearGradient
              start={vec(2 * r, 2 * r)}
              end={vec(4 * r, 4 * r)}
              colors={['#0061ff', '#60efff']}
            /> */}
          {/* <Circle cx={3 * r} cy={3 * r} r={r} /> */}
          <Path
            path="M148.716 61.1814C151.118 73.9903 150.14 87.2039 145.879 99.5199C141.618 111.836 134.222 122.829 124.419 131.416C114.616 140.003 102.745 145.888 89.9753 148.49C77.2056 151.092 63.9783 150.322 51.5969 146.255L57.1692 129.29C66.6026 132.388 76.6806 132.975 86.4099 130.992C96.1392 129.01 105.184 124.526 112.653 117.984C120.122 111.441 125.757 103.065 129.003 93.6819C132.249 84.2983 132.995 74.2307 131.165 64.4715L148.716 61.1814Z"
            color="#F65556"
          />
          <Path
            path="M51.8242 146.329C39.24 142.24 27.9615 134.895 19.1334 125.039C10.3054 115.182 4.24203 103.166 1.55878 90.2091C-1.12447 77.2521 -0.3321 63.816 3.85547 51.2642C8.04304 38.7125 15.4767 27.4921 25.4021 18.7417C35.3274 9.9913 47.3911 4.02251 60.3687 1.44111C73.3463 -1.1403 86.7758 -0.242428 99.2943 4.04359C111.813 8.32961 122.974 15.8512 131.647 25.845C140.319 35.8387 146.193 47.9489 148.672 60.9464L131.068 64.3045C129.181 54.4127 124.711 45.1963 118.111 37.5905C111.511 29.9848 103.016 24.2605 93.4893 20.9986C83.9621 17.7367 73.7416 17.0534 63.865 19.018C53.9883 20.9825 44.8073 25.5251 37.2536 32.1846C29.6999 38.844 24.0425 47.3834 20.8555 56.9359C17.6686 66.4884 17.0655 76.714 19.1076 86.5749C21.1497 96.4357 25.7642 105.581 32.4828 113.082C39.2014 120.583 47.7849 126.173 57.3622 129.285L51.8242 146.329Z"
            color="#165CDD"
          />
          {/* </Group> */}
        </Canvas>
      </View>
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
