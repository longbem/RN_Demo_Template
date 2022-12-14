import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '@RNDemo/routers/ScreenName';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxBtn: {
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CDCDCD',
    padding: 16,
  },
});

const ItemHome = ({onPress, label}: {onPress?: () => void; label?: string}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.boxBtn}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export const HomeScreen: React.FC<any> = () => {
  const {navigate}: any = useNavigation();

  const onPressAnimation = () => {
    navigate(SCREEN_NAME.AnimationScreen);
  };

  const onPressChart = () => {
    navigate(SCREEN_NAME.ChartScreen);
  };

  const onPressSplash = () => {
    navigate(SCREEN_NAME.SplashScreen);
  };

  return (
    <View>
      <ItemHome label="Go to Animation" onPress={onPressAnimation} />
      <ItemHome label="Go to Chart" onPress={onPressChart} />
      <ItemHome label="Go to Splash" onPress={onPressSplash} />
    </View>
  );
};
