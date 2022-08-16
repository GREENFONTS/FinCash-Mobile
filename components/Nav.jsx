import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Link } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { dispatch, useAppSelector } from "../redux/store";
import { useState } from "react";
import MyDrawer from "../screens/Drawer";
import { current } from "@reduxjs/toolkit";
import { setDrawerState } from "../redux/features/Utils/Utils";

const NavComponent = () => {
  const {drawerState} = useAppSelector(state => state.utils)

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.brand}>
          <Svg width={40} height={36} fill="none">
            <Path
              d="M0 9.3913C0 4.20463 4.20463 0 9.3913 0H26.6087C31.7954 0 36 4.20463 36 9.3913V26.6087C36 31.7954 31.7954 36 26.6087 36H9.3913C4.20463 36 0 31.7954 0 26.6087V9.3913Z"
              fill="#440079"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.3387 27.7826H14.512V11.5517H8.21741V8.21738H14.5556V8.21737H27.7826V11.5517L24.6056 11.5517H18.3823V16.5946H26.202V19.6809H18.3823V27.7826L18.3387 27.7826Z"
              fill="white"
            />
          </Svg>
          <Link
            style={{ fontSize: 30, fontWeight: "600", marginHorizontal: 10 }}
            to={{ screen: "Login" }}
          >
            FinCash
          </Link>
        </View>
        <View>
          <Icon name="menu-outline" size={30} onPress={() => dispatch(setDrawerState(!drawerState))}></Icon>
          
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
    padding: 10,
    height: 60,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 7,
    },
    shadowRadius: 2,
   
  },
  navBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
   
  },

  brand: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default NavComponent;
