import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';

const SignupScreen = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const showAlert = (message) => {
    Alert.alert(message);
  };

  const formvalid = () => {
    if (firstname === '' || lastname === '') {
      showAlert('Enter your names to proceed');
      return;
    }

    if (password === '' || confirm === '') {
      showAlert('Put in password, please.');
      return;
    }

    if (password !== confirm) {
      showAlert('Check that passwords match');
      return;
    } else {
      showAlert('Successfully registered');
      // Here you can add code to submit the data to your backend
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DataDays</Text>
      <View style={styles.formarea}>
        <Text style={styles.signup}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="First name"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          value={lastname}
          onChangeText={setLastname}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirm}
          onChangeText={setConfirm}
          secureTextEntry={true}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={formvalid}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.signin}>
          <Text>Have an account? </Text>
          <TouchableOpacity onPress={() => {/* Navigate to sign-in screen */}}>
            <Text style={styles.signinText}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#84de02',
    textDecorationLine: 'underline',
  },
  formarea: {
    backgroundColor: '#f5e9d3',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  signup: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signinText: {
    color: 'green',
    fontSize: 12,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignupScreen;
