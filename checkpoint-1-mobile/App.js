import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaInicial from './PaginaInicial'
import SecondPage from './SegundaPagina'


const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>{
      <Navigator>
        <Screen
          name='PaginaInicial'
          component={PaginaInicial}
        />
        <Screen 
          name='SecondPage' 
          component={SecondPage} 
        />
      </Navigator>
    }</NavigationContainer>
  );
}