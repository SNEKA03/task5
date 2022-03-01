import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import { useCountContext } from './countcont';

export default function Mainscreen() {
    const CountContext= useCountContext();
    console.log(CountContext);

  return (
    
    
    <View>
      
      <View style={styles.bg}>
        
        
      <Text>{CountContext.count}</Text>
      
      <Button title='Click' onPress={()=> CountContext.setCount(CountContext.count+1)}></Button>
      <Text >{CountContext.count2}</Text>
      <Button title='Click' onPress={()=> CountContext.setCount2(CountContext.count+1)}></Button>
      <Text >{CountContext.count3}</Text>
      <Button title='Click' onPress={()=> CountContext.setCount3(CountContext.count+1)}></Button>
      <StatusBar style="auto" />
    
    </View>
    
    </View>
    
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