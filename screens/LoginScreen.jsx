import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { dispatch, useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { UserLogin } from "../redux/features/Users/auth";

const LoginPage = ({ navigation }) => {
  const { drawerState } = useAppSelector((state) => state.utils);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (drawerState) {
      navigation.navigate("Drawer");
    }
  });

  const submitHandler = (e) => {
    const formBody = {
      email,
      password,
    };
    
    dispatch(UserLogin(formBody));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon name="person" size={110}></Icon>
        <Text style={{ fontSize: 40, marginTop: 15 }}>
          {" "}
          LogIn to your account
        </Text>

        <View style={styles.card}>
          <TextInput
            placeholder="Enter your Email"
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            value={password}
            keyboardType="visible-password"
          />

          <Button
            title="Login"
            style={styles.button}
            onPress={(e) => submitHandler(e)}
          />
        </View>

        <View>
          <Text> Dont't have an account? SignUp</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContents: "center",
    backgroundColor: "#fff",
  },
  card: {
    marginTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContents: "center",
    width: "90%",
    height: 200,
  },
  input: {
    height: 50,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#A020F0",
    display: "none",
  },
});

export default LoginPage;
