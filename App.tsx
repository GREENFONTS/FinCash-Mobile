import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import NavComponent from "./components/Nav";
import Main from "./Main";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavComponent />
        {/* <Main /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#eee"
  },
});
