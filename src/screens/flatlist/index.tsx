import React from 'react';
import {View, Text} from 'react-native';
import Animated, {
  event,
  useSharedValue,
  set,
  add,
  block,
  cond,
} from 'react-native-reanimated';

interface ObjectList {
  name: string;
  key: number;
}
const data: ObjectList[] = [
  {
    name: 'test',
    key: 1,
  },
];

export const FlatListAnimation: React.FC<any> = () => {
  const y = useSharedValue(0);
  const _x = useSharedValue(0);

  const onScroll = event(
    [
      {
        nativeEvent: {contentOffset: {y}},
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const renderItem = ({item, index}: {item: ObjectList; index: number}) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
        {...{onScroll}}
      />
    </View>
  );
};
