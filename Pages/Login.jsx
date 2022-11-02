import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';
import { useNavigate } from "react-router-native";

export default function Login() {

    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => setShowForm(true);
    const handleHideForm = () => setShowForm(false);

    return (
        <>
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
                        <Pressable onPress={() => {navigate("/Home")}} style={styles.formButtonSubmit}>
                            <Text style={styles.formButtonText}>Submit</Text>
                        </Pressable>
                    </View>
                </View>
            }
            <StatusBar style="auto" />
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '60%',
        height: 50,
        justifyContent: "center",
        backgroundColor: '#843B62',
        borderRadius: 10
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D8DBE3'
    },

    formView: {
        width: "100%",
        alignItems: 'center'
    },

    textInput: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#1A1D1A",
        outlineColor: '#843B62',
        borderRadius: 10,
        width: '50%'
    },

    formButtonsView: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },

    formButtonCancel: {
        width: 160,
        borderWidth: 1,
        borderColor: "#1A1D1A",
        height: 40,
        justifyContent: "center",
        borderRadius: 10
    },

    formButtonSubmit: {
        width: 160,
        backgroundColor: '#843B62',
        borderWidth: 1,
        borderColor: "#843B62",
        height: 40,
        justifyContent: "center",
        borderRadius: 10
    },

    formButtonText: {
        textAlign: 'center'
    }
});
