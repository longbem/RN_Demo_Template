import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedGestureHandler,
  withSpring,
  LayoutAnimation,
} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';

export const AnimationScreen = () => {
  const offset = useSharedValue(0);
  const opacity = useSharedValue(0);
  const color = useSharedValue('#123459');
  const pressed = useSharedValue(false);
  const rotation = useSharedValue(0);
  const textValue = useSharedValue('Checking update');

  const startingPosition = 10;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const onPress = () => {
    offset.value = withTiming(Math.random() * 255);
    opacity.value = withTiming(Math.random() % 2);
    color.value = withTiming(
      `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    );
    rotation.value = withRepeat(withTiming(offset.value), 6, true);
  };

  const onPressCheckUpdate = () => {
    setTimeout(() => {
      textValue.value = 'Updating';
    }, 1500);
  };

  const styleAnimationDefault = useAnimatedStyle(() => {
    return {
      // opacity: opacity.value,
      backgroundColor: color.value,
      transform: [
        {
          translateX: offset.value,
        },
        {
          translateY: offset.value / 10,
        },
      ],
    };
  });

  const styleAnimation = useAnimatedStyle(() => {
    return {
      // opacity: opacity.value,
      // backgroundColor: color.value,
      transform: [
        {
          // translateX: withTiming(offset.value, {
          //   duration: 20,
          // }),
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  });

  const onPressHanlde = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      console.log('🚀 ~ file: index.tsx ~ line 70 ~ AnimationScreen ~ event');
      x.value = event.x;
      y.value = event.y;
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      x.value = withSpring(startingPosition);
      y.value = withSpring(startingPosition);
    },
    onFinish: () => {
      textValue.value = 'Updating';
    },
  });

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? '#FEEF86' : '#001972',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View style={[styles.box, styleAnimationDefault]}>
        <Text>Test</Text>
      </Animated.View>
      <Animated.View style={[styles.box, styles.rotate, styleAnimation]}>
        <Text>Test</Text>
      </Animated.View>
      <TouchableOpacity onPress={onPress}>
        <Text>onPress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressCheckUpdate}>
        <Animated.Text>{textValue.value}</Animated.Text>
      </TouchableOpacity>
      <TapGestureHandler onGestureEvent={onPressHanlde}>
        <Animated.View style={[styles.ball, uas]} />
      </TapGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 70,
    height: 70,
    borderRadius: 7,
    backgroundColor: '#123459',
    marginBottom: 10,
  },
  rotate: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#123459',
  },
});
