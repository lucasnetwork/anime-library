import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useState} from 'react';
import Initial from './Tabs/Initial';
import Categories from './Tabs/Categories';
import CustomTabBar from '../../components/CustomTabBar';
import styles from './styles';

const renderScene = SceneMap({
  first: Initial,
  second: Categories,
});

const Main = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Inicio'},
    {key: 'second', title: 'Categorias'},
  ]);

  return (
    <>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <CustomTabBar props={props} setIndex={setIndex} />
        )}
      />
      <TouchableOpacity style={styles.containerButtonAdd}>
        <Text style={styles.containerButtonAddText}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default Main;
