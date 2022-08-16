import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { dispatch, useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { UserLogin, UserRegister } from "../redux/features/Users/auth";


const RegisterPage = ({navigation}) => {
  const { drawerState } = useAppSelector((state) => state.utils);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordLengthCheck, setPasswordLengthCheck] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)

  
  useEffect(() => {
    if (drawerState) {
      navigation.navigate("Drawer");
    }
  }, [drawerState]);

  useEffect(() => {
    if (password.length > 3 && password.length < 8) {
      setPasswordLengthCheck(true)
    }
    else{
      setPasswordLengthCheck(false)
    }
  }, [password]);

  useEffect(() => {
    if (password2.length > 3 && password !== password2) {
      setPasswordCheck(true)
    }
    else{
      setPasswordCheck(false)
    }
  }, [password, password2]);

  const submitHandler = (e) => {
    const formBody = {
      username,
      email,
      password,
    };
    console.log(formBody)
    //dispatch(UserRegister(formBody));
  };

  return (
    <View style={styles.container}>
    <View style={styles.card}>
      <Icon name="person" size={110}></Icon>
      <Text style={{ fontSize: 40, marginTop: 15 }}>
        {" "}
        SignUp an account
      </Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Enter your Username"
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          keyboardType="email-address"
        />

<TextInput
          placeholder="Enter your email"
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
        {passwordLengthCheck && <Text style={{color: "red"}}>Passwords must be more than 8 characters</Text>}

<TextInput
          placeholder="Confirm your password"
          style={styles.input}
          onChangeText={(password) => setPassword2(password)}
          value={password2}
          keyboardType="visible-password"
        />
        {passwordCheck && <Text style={{color: "red"}}>Passwords don't match</Text>}
        

        <Button
          title="Login"
          style={styles.button}
          onPress={(e) => submitHandler(e)}
        />
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
  marginTop: 10,
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


export default RegisterPage