import {NavigationState, SceneRendererProps} from 'react-native-tab-view';
import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';

interface ICustomTabBar {
  props: SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
  };
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const CustomTabBar = ({props, setIndex}: ICustomTabBar) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={{backgroundColor: '#000'}}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <TouchableOpacity key={route.key} onPress={() => setIndex(i)}>
            <Animated.Text style={{opacity, color: '#fff'}}>
              {route.title}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
