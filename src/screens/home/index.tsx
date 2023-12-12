import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '@RNDemo/routers/ScreenName';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';

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

  const onPressLoading = () => {
    navigate(SCREEN_NAME.LoadingScreen);
  };

  const onPressFlatList = () => {
    navigate(SCREEN_NAME.FlatListAnimationScreen);
  };

  return (
    <View>
      <ItemHome label="Go to Animation" onPress={onPressAnimation} />
      <ItemHome label="Go to Chart" onPress={onPressChart} />
      <ItemHome label="Go to Splash" onPress={onPressSplash} />
      <ItemHome label="Go to Loading" onPress={onPressLoading} />
      <ItemHome label="Go to FlatList" onPress={onPressFlatList} />
      <Pressable
        onPress={() => Alert.alert('test')}
        style={{alignItems: 'center', marginTop: '20%'}}>
        <Text>Test Pressable</Text>
      </Pressable>
    </View>
  );
};
