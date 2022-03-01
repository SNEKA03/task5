import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import CountContextProvider from './src/countcont';
import { useCountContext } from './src/countcont';
import Mainscreen from './src/mainscreen';

export default function App() {


  const CountContext= useCountContext();
  console.log(CountContext);

  return (
    
    <CountContextProvider>
    <Mainscreen>

    </Mainscreen>
    </CountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {

        
    backgroundColor:"red"

  },
  bg: {
    marginTop:200,
    backgroundColor: '#FF0000',
    padding:10

  }
});