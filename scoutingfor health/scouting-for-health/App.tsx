import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './src/screens/HomeScreen';
import OfflineGuidesScreen from './src/screens/OfflineGuidesScreen';
import GuideDetailScreen from './src/screens/GuideDetailScreen';
import BloodDonorScreen from './src/screens/BloodDonorScreen';
import VolunteerScreen from './src/screens/VolunteerScreen';

const Stack = createStackNavigator();

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ea', // Purple for headings, tabs, icons
    secondary: '#d32f2f', // Red for warnings, urgent actions
    tertiary: '#7c4dff', // Lighter purple for accents
    background: '#ffffff', // White clean background
    surface: '#ffffff',
    surfaceVariant: '#f5f5f5', // Light grey for cards
    onPrimary: '#ffffff',
    onSecondary: '#ffffff',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{ title: 'Scouting For Health' }}
            />
            <Stack.Screen 
              name="OfflineGuides" 
              component={OfflineGuidesScreen} 
              options={{ title: 'First Aid Guides' }}
            />
            <Stack.Screen 
              name="GuideDetail" 
              component={GuideDetailScreen} 
              options={{ title: 'Guide Details' }}
            />
            <Stack.Screen 
              name="BloodDonor" 
              component={BloodDonorScreen} 
              options={{ title: 'Blood Donor Finder' }}
            />
            <Stack.Screen 
              name="Volunteer" 
              component={VolunteerScreen} 
              options={{ title: 'Volunteer Corp' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
