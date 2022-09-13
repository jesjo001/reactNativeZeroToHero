/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Items = [
  {key: 1, item: 'item 1'},
  {key: 2, item: 'item 2'},
  {key: 3, item: 'item 3'},
  {key: 4, item: 'item 4'},
  {key: 5, item: 'item 5'},
  {key: 6, item: 'item 6'},
  {key: 7, item: 'item 7'},
  {key: 8, item: 'item 8'},
  {key: 9, item: 'item 9'},
  {key: 10, item: 'item 10'},
  {key: 11, item: 'item 10'},
  {key: 12, item: 'item 10'},
  {key: 13, item: 'item 10'},
];
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [name, setName] = useState('Josh');
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(!Refreshing);
  };

  const onClickHandler = () => {
    setName('Programming wit Josh');
  };

  return (
    <ScrollView
      style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['#ff00ff']}
        />
      }>
      {Items.map((item, index) => {
        return (
          <View style={styles.item} key={item.key}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: 10,
    fontStyle: 'italic',
    backgroundColor: 'blue',
    alignContent: 'stretch',
  },
});

export default App;
