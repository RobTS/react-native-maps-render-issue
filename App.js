/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const App: () => React$Node = () => {
  const setMapRef = useRef();
  const [mapVisible, setMapVisible] = useState(true);
  setMapRef.current = setMapVisible;
  const onTemporaryRemove = () => {
    if (!mapVisible) {
      return;
    }
    setMapRef.current(false);
    setTimeout(() => {
      setMapRef.current(true);
    }, 2000);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {mapVisible ? (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{height: 400}}
            initialRegion={{
              latitude: 37.806173,
              longitude: -122.446875,
              latitudeDelta: 0.05,
              longitudeDelta: 0.02,
            }}>
            <Marker
              image={require('./src/assets/marker.png')}
              centerOffset={{x: 0, y: 0}}
              anchor={{x: 0.5, y: 0.5}}
              coordinate={{
                latitude: 37.806173,
                longitude: -122.446875,
              }}
              tracksViewChanges={false}
            />
          </MapView>
        ) : (
          <View style={{height: 400, backgroundColor: '#fafafa'}} />
        )}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={onTemporaryRemove}
            style={{
              padding: 20,
              flex: 1,
              backgroundColor: '#48bad3',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <Text>Make it disappear!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
