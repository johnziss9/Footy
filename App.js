import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';

export default function App() {

  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(true);
  const handleHideForm = () => setShowForm(false);

  return (
    <View style={styles.container}>
      {!showForm ?
        <Pressable onPress={handleShowForm} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </Pressable> :
        <View style={styles.formView}>
          <TextInput
            placeholder="Username"
            style={styles.textInput}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.textInput}
          />
          <View style={styles.formButtonsView}>
            <Pressable onPress={handleHideForm} style={styles.formButtonCancel}>
              <Text style={styles.formButtonText}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleHideForm} style={styles.formButtonSubmit}>
              <Text style={styles.formButtonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8DBE3'
  },

  button: {
    width: '60%',
    height: '50px',
    justifyContent: "center",
    backgroundColor: '#843B62',
    borderRadius: '10px'
  },

  text: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#D8DBE3'
  },

  formView: {
    width: "100%",
    alignItems: 'center'
  },

  textInput: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px',
    border: "1px solid #1A1D1A",
    outlineColor: '#843B62',
    borderRadius: '10px',
    width: '50%'
  },

  formButtonsView: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15px'
  },

  formButtonCancel: {
    width: '160px',
    border: '1px solid #1A1D1A',
    height: '40px',
    justifyContent: "center",
    borderRadius: '10px'
  },

  formButtonSubmit: {
    width: '160px',
    backgroundColor: '#843B62',
    border: '1px solid #843B62',
    height: '40px',
    justifyContent: "center",
    borderRadius: '10px'
  },

  formButtonText: {
    textAlign: 'center'
  }
});
