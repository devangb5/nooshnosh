import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer';

const menuItems = [
  { id: '1', name: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish.', price: '$12.99' },
  { id: '2', name: 'Margherita Pizza', description: 'Tomato, mozzarella, and basil.', price: '$10.99' },
  { id: '3', name: 'Caesar Salad', description: 'Crispy romaine with Caesar dressing.', price: '$8.99' },
  { id: '4', name: 'Grilled Chicken', description: 'Served with seasonal vegetables.', price: '$14.99' },
];

const MenuScreen = () => {
  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60, // Avoid overlap with footer
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    elevation: 1, // Adds shadow for Android
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MenuScreen;
