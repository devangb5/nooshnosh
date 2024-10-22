import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.label}>Name: John Doe</Text>
      <Text style={styles.label}>Email: john.doe@example.com</Text>
      <Text style={styles.label}>Phone: (123) 456-7890</Text>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 60, // Avoid overlap with footer
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default ProfileScreen;
