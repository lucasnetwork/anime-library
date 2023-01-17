import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {LinearGradient} from 'react-native-gradients';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {IAnimeWithId} from '../../../interfaces/anime';
import {useContextProvider} from '../../../services/context';
const colorList = [
  {offset: '0%', color: '#000', opacity: '0.8'},
  {offset: '20%', color: '#000', opacity: '0.5'},
  {offset: '100%', color: '#fff', opacity: '0'},
];

const Anime = () => {
  const [anime, setAnime] = useState<IAnimeWithId>();
  const navigation = useNavigation();
  const {animes} = useContextProvider();
  const params = useRoute<{params: {id: string}}>();

  useEffect(() => {
    console.log(params);
    const currentAnime = animes.find(
      animeValue => animeValue.id === params.params.id,
    );
    setAnime(currentAnime);
  }, [animes, params]);

  const isPressed = useSharedValue(false);

  const offset = useSharedValue({x: 0, y: 0, velocity: 0});

  const {height} = useWindowDimensions();

  const animatedStyles = useAnimatedStyle(() => {
    const newHeight = height - (height - offset.value.y);
    if (offset.value.y === 0) {
      return {height};
    }
    if (newHeight <= 200) {
      return {
        height: 200,
      };
    }
    return {
      height: newHeight,
    };
  });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      console.log(e);
      offset.value = {
        x: e.x,
        y: e.absoluteY,
        velocity: e.velocityY,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Animated.View style={[animatedStyles]}>
        <Image
          source={{
            uri: anime?.url,
          }}
          style={styles.imageContainer}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.buttonGoBack}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="#fff" size={32} />
        </TouchableOpacity>
        <GestureDetector gesture={gesture}>
          <Text style={styles.textImage}>{anime?.name}</Text>
        </GestureDetector>
        <View style={styles.containerGradient}>
          <LinearGradient angle={90} colorList={colorList} />
        </View>
      </Animated.View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerContent}>
            <Text style={styles.title}>Sinopse</Text>
            <Text>{anime?.resume}</Text>
            <View style={[styles.row, styles.containerInfos]}>
              <View style={[styles.row, styles.infoContainer]}>
                <MaterialIcons name="layers-outline" size={24} color="#000" />
                <Text style={styles.textInfo}>
                  {anime?.episodeNumbers} episódios
                </Text>
              </View>
              <View style={[styles.row, styles.infoContainer]}>
                <Icon name="star" color="#000" size={24} />
                <Text style={styles.textInfo}>{anime?.review}/5</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Anime;
