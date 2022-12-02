import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export const HomeScreen = () => {
  const {navigate} = useNavigation();

  const onPressAnimation = () => {
    navigate('AnimationScreen');
  };

  const onPressChart = () => {
    navigate('ChartScreen');
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={onPressAnimation}>
        <Text>Go to Animation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressChart}>
        <Text>Go to Chart</Text>
      </TouchableOpacity>
    </View>
  );
};
