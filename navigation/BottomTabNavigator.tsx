import { Entypo, MaterialIcons, AntDesign, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList } from '../types';


import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import MarketScreen from '../screens/MarketScreen';
import RankingsScreen from '../screens/RankingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CoinDetailsScreen from '../screens/CoinDetailsScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (    
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: "yellow", inactiveTintColor: "white", activeBackgroundColor: "#CC5500", inactiveBackgroundColor: "black" }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" color={color} size = {30}/>,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" color={color} size = {30}/>,
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" color={color} size = {30} />,
        }}
      />
      <BottomTab.Screen
        name="Rankings"
        component={RankingsScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" color={color} size = {30}/>,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" color={color} size = {30} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
