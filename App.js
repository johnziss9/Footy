import { View, StyleSheet } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
import Attendance from "./Pages/Attendance";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Attendance" element={<Attendance />} />
        </Routes>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D8DBE3'
  }
});