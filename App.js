import React, { useEffect , useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import Home from './Screens/Home';
import DrawerNavigation from './Routes/DrawerNavigation';
import Settings from './Screens/Settings';
export default function App() {
  
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    // simulate loading time
    setTimeout(() => {
      setisLoading(false);
    }, 4000);
  }, []);
  
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
{/* <NavigationContainer>              <--- Add this for home
      <MyDrawer />
    </NavigationContainer> */}

  return (
    <View style={styles.container}>
      {isLoading ? (<SplashScreen />) : (<DrawerNavigation />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
