import {NavigationState, SceneRendererProps} from 'react-native-tab-view';
import React from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';
import styles from './styles';

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
    <View style={styles.container}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex =>
            inputIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <View key={route.key} style={styles.containerButton}>
            <TouchableOpacity onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.textButton, {opacity}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
