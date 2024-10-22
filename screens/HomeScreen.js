import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require('../assets/full.jpeg')} // Adjust the path as needed
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to Our Restaurant!</Text>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          We are a family-owned restaurant dedicated to serving delicious, fresh meals made with love. 
          Our menu features a variety of dishes inspired by traditional recipes and modern culinary trends.
          Come and enjoy a warm atmosphere and great service!
        </Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 60, // Add padding to prevent overlap with footer
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    margin: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default HomeScreen;
