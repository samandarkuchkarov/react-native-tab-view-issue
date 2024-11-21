import * as React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const data = new Array(200);

const FirstRoute = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <FlatList
        data={data}
        renderItem={({index}) => (
          <TouchableOpacity
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: 'red',
              height: 50,
              backgroundColor: 'pink',
              marginVertical: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
              {index}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
const SecondRoute = () => {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <FlatList
        data={data}
        renderItem={({index}) => (
          <TouchableOpacity
            style={{
              width: '90%',
              alignSelf: 'center',
              backgroundColor: 'red',
              height: 50,
              backgroundColor: 'pink',
              marginVertical: 10,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>
              {index}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index + 100}
      />
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const routes = [
  {key: 'first', title: 'First'},
  {key: 'second', title: 'Second'},
];

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
