import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CheckoutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/adaptive-icon.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Order Successful 🎉</Text>

      <Text style={styles.info}>
        Your order has been placed successfully!{"\n"}
        We’ll notify you when it’s on the way 🚚
      </Text>

      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate('Order')}
      >
        <Text style={styles.backText}>Back to Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 25,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  backBtn: {
    backgroundColor: '#ff914d',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  backText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
