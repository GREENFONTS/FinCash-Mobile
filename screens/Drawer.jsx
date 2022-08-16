import { useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Svg, { Path } from "react-native-svg";
import { setDrawerState } from "../redux/features/Utils/Utils";
import { dispatch, useAppSelector } from "../redux/store";

const MyDrawer = ({ navigation }) => {
  const { drawerState } = useAppSelector((state) => state.utils);

  useEffect(() => {
    if (!drawerState) {
      navigation.goBack();
    }
  }, [drawerState]);

  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <Text style={{ fontSize: 25, fontFamily: "Roboto", marginBottom: 5 }}>
          Welcome ☺{" "}
        </Text>
      </View>
      <View>
        <Button title="SignIn" style={{ backgroundColor: "#fff" }} />
      </View>
      <View>
        <Button
          title="SignUp"
          style={{ color: "#fff" }}
          onPress={() => {
            navigation.navigate("Register");
            dispatch(setDrawerState(false));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "50%",
    height: 800,
    backgroundColor: "#fff",
    position: "absolute",
    right: 0,
    padding: 10,
  },
  brand: {
    justifyContent: "center",
    borderBottomColor: "black",
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default MyDrawer;
