import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Button } from 'react-native';

export default function ContactsApp() {
  const [contacts, setContacts] = useState([{}]);
  const [contact, setContact] = useState({ name: "", number: "" });
  const handleChangeName = (text) => { setContact({ ...contact, name: text }); };
  const handleChangeNumber = (text) => { setContact({ ...contact, number: text }); };
  const submitContact = (text) => {
    // setContact([...contact, contacts]);
    console.log(typeof contact);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <StatusBar style='auto' />
      <TextInput style={styles.input} placeholder='Name' onChangeText={(text) => handleChangeName(text)} value={contacts.name}></TextInput>
      <TextInput style={styles.input} placeholder='Number' onChangeText={(text) => handleChangeNumber(text)} value={contacts.number}></TextInput>
      <View style={styles.btn}>
        <Button color='white' title='Add Contact' onsubmit={() => submitContact('text')} />
      </View>
      <Text style={styles.title}>My Contacts</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,

  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  btn: {
    paddingHorizontal: 30,
    margin: 12,
    backgroundColor: '#365486',
    padding: 10,
    borderRadius: 4,
  },
  totalPrice: {
    margin: 10,
  }
});
