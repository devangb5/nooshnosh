import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('./assets/logo.png')} // Adjust the path as needed
                style={styles.logo}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0, // Removes shadow on Android
          },
          headerTintColor: '#333', // Color for back button and title
          
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100, // Adjust width as needed
    height: 40, // Adjust height as needed
    resizeMode: 'contain',
  },
});

export default App;
