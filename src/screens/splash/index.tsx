import {center} from '@shopify/react-native-skia';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxText: {
    height: 50,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    bottom: 30,
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  txtSplash: {zIndex: 100, width: '70%'},
  btnClose: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CDCDCD',
  },
  ig: {
    width: width,
    height: height * 0.8,
    position: 'absolute',
  },
});

export const SplashScreen: React.FC<any> = () => {
  const [isShow, setShow] = React.useState<boolean>(false);
  const fontSize = useSharedValue(40);

  const x = useSharedValue(width * 0.23);
  const y = useSharedValue(height * 0.4);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      x.value = withSpring(16);
      y.value = withSpring(height * 0.81);
      // style text
      fontSize.value = withSpring(16);
    }, 1000);
    setTimeout(() => {
      setShow(true);
    }, 3300);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const animatedSplash: any = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSize.value, {
        duration: 800,
        easing: Easing.bezier(0.3, 0.3, 0.3, 0.3),
      }),
      transform: [
        {
          translateX: withTiming(x.value, {
            duration: 900,
            easing: Easing.bezier(0.3, 0.3, 0.3, 0.5),
          }),
        },
        {
          translateY: withTiming(y.value, {
            duration: 700,
            easing: Easing.bezier(0.3, 0.3, 0.3, 0.4),
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container]}>
      {isShow ? (
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1568826069038-f3de1448e9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
          }}
          style={styles.ig}
        />
      ) : null}
      <Animated.Text style={[styles.txtSplash, animatedSplash]}>
        Splash screen
      </Animated.Text>
      {isShow ? (
        <View style={styles.boxText}>
          <TouchableOpacity
            style={styles.btnClose}
            onPress={() => Alert.alert('x')}>
            <Text>x</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </Animated.View>
  );
};
