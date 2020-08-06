import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, AntDesign } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';
import { View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}

    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={{ rotation: 180 }}>
                <Feather name="tv" size={size} color={focused ? '#8257e5' : color} borderRadius={10} />
              </View>

            );
          }
        }}

      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Feather name="heart" size={size} color={focused ? '#8257e5' : color} />
            );
          }
        }}

      />
    </Navigator>
  )
}

export default StudyTabs;

