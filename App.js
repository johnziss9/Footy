import { View, StyleSheet } from "react-native-web";
import { NativeRouter, Routes, Route } from "react-router-native";
import Home from "./Pages/Home";

export default function App() {

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route exact path="/" element={<Home />} />
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