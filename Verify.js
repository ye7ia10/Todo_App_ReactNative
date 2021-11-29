import React, { useState } from 'react';
import { Button, TextInput, StyleSheet } from 'react-native';
import auth from'@react-native-firebase/auth';
export default function Verify(){

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

 

  return (
    <>
        <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+201203285536')}
      />
      <TextInput placeholder="Verification Code" style={styles.inp} value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

const styles = StyleSheet.create({
  inp:{
    padding: 15,
    borderColor: '#000',
    borderRadius: 15, 
    borderWidth: 1,
    margin:15,
    width: 300,
  }
})