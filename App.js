// Import necessary components and dependencies
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import { Colors } from './constants/styles';
import IconButton from './components/ui/IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';
import FavoriteContextProvider from './store/context/FavoriteContext';
import { AuthContext } from './store/context/auth-context';
import AuthContextProvider from './store/context/auth-context';
import { NavigationContainer } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    const authCtx = useContext(AuthContext);

    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="All Category"
          component={CategoriesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <IconButton size={size} name="list" color={color} />
            ),
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="exit"
                color={tintColor}
                size={24}
                onPress={authCtx.logout}
              />
            ),
            headerStyle: { backgroundColor: '#f106bf' },
            cardStyle: { backgroundColor: '#ec90d6' },
          }}
        />
        <Drawer.Screen
          name="My Favorite"
          component={FavoriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <IconButton size={size} name="star" color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <FavoriteContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f106bf' },
            cardStyle: { backgroundColor: '#ec90d6' },
          }}
        >
          <Stack.Screen
            name="Meal Category"
            component={MyDrawer}
            options={{
              title: 'All Categories',
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meal OverView" component={MealsOverViewScreen} />
          <Stack.Screen name="Meal Details" component={MealDetailScreen} />
        </Stack.Navigator>
      </FavoriteContextProvider>
    </>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#f106bf' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getToken() {
      try {
        const storageToken = await AsyncStorage.getItem('token');
        if (storageToken) {
          authCtx.authenticate(storageToken);
        }
      } catch (error) {
        console.error('Error loading token:', error);
      } finally {
        setIsFetching(true);
      }
    }

    async function hideSplashScreen() {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.error('Error hiding splash screen:', error);
      }
    }

    getToken();
    hideSplashScreen();
  }, []);

  if (!isFetching) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
