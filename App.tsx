import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Calculator from './src/screens/Calculator';


const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <Calculator/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app:{
    backgroundColor:'black',
    flex:1,
  },
});

export default App;
