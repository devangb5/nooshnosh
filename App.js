import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

const App = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleReservation = () => {
        // Handle reservation logic
        alert(`Reservation made for ${name} on ${date} at ${time}`);
        setName('');
        setDate('');
        setTime('');
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Restaurant Name</Text>
            <Text style={styles.description}>
                Welcome to our restaurant! We serve delicious food made with the freshest ingredients.
            </Text>
            
            <Text style={styles.subtitle}>Menu</Text>
            <View style={styles.menu}>
                <Text style={styles.menuItem}>🍝 Pasta - $12</Text>
                <Text style={styles.menuItem}>🍕 Pizza - $10</Text>
                <Text style={styles.menuItem}>🥗 Salad - $8</Text>
            </View>

            <Text style={styles.subtitle}>Make a Reservation</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Date (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Time (HH:MM)"
                value={time}
                onChangeText={setTime}
            />
            <Button title="Reserve Table" onPress={handleReservation} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    menu: {
        marginBottom: 24,
    },
    menuItem: {
        fontSize: 18,
        marginVertical: 4,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 12,
    },
});

export default App;
