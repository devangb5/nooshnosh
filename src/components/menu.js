import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Menu = () => {
    const menuItems = [
        { id: '1', name: 'Pasta', description: 'Delicious homemade pasta.', price: '$12' },
        { id: '2', name: 'Pizza', description: 'Cheesy goodness.', price: '$10' },
        // Add more items
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Menu</Text>
            <FlatList
                data={menuItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 16 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    item: { marginBottom: 12 },
    itemName: { fontSize: 18, fontWeight: 'bold' },
});

export default Menu;
