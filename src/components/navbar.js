import React from 'react';
import { View, Text, Button } from 'react-native';

const Navbar = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold',textAlign:'center' }}>NOOSH NOSH</Text>
            <Button title="Menu" onPress={() => navigation.navigate('Menu')} />
            <Button title="Reservations" onPress={() => navigation.navigate('Reservations')} />
            <Button title="Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Button title="Testimonials" onPress={() => navigation.navigate('Testimonials')} />
        </View>
    );
};

export default Navbar;
