import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import MyDrawer from "./screens/Drawer";
import { useAppSelector } from "./redux/store";
import LoginPage from "./screens/LoginScreen";
import RegisterPage from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const Main = () => {
  const { drawerState } = useAppSelector((state) => state.utils);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Drawer" component={MyDrawer} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
