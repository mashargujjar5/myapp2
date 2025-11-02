import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function OrderScreen({ navigation }) {
  const items = [
    {
      id: 1,
      name: "Crispy Chicken Sandwich",
      description: "2x tuna sashimi, 3x vegetables, 1x noodle",
      price: "$29.50",
      image: require('../assets/adaptive-icon.png'),
    },
    {
      id: 2,
      name: "Grilled Beef Burger",
      description: "1x beef patty, cheese, lettuce, sauce",
      price: "$34.00",
      image: require('../assets/adaptive-icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Orders</Text>
        <Text style={styles.headerSub}>Review & checkout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.qtyBox}>
                  <Text style={styles.qtyText}>x1</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* Summary card */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>$63.50</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Tax & Fees</Text>
            <Text style={styles.summaryValue}>$3.75</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery</Text>
            <Text style={styles.summaryValue}>Free</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$67.25</Text>
          </View>
        </View>

      </ScrollView>

      <TouchableOpacity
        style={styles.checkoutBtn}
        onPress={() => navigation.navigate('Checkout')}
      >
        <Text style={styles.checkoutText}>Go to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFB', paddingTop: 50, paddingHorizontal: 16 },
  header: { marginBottom: 12 },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#111' },
  headerSub: { color: '#777', marginTop: 4 },

  scroll: { paddingBottom: 20 },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 14,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 3,
  },
  image: { width: 80, height: 80, borderRadius: 12, marginRight: 12 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: '700', color: '#111' },
  description: { color: '#666', fontSize: 13, marginTop: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  price: { fontSize: 16, fontWeight: '800', color: '#222' },
  qtyBox: { backgroundColor: '#FFF5EE', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 8 },
  qtyText: { color: '#FF7A3D', fontWeight: '700' },

  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginTop: 6,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  summaryLabel: { color: '#666' },
  summaryValue: { fontWeight: '700', color: '#222' },
  totalRow: { borderTopWidth: 1, borderTopColor: '#F0F0F0', paddingTop: 10, marginTop: 6 },
  totalLabel: { fontSize: 16, fontWeight: '800' },
  totalValue: { fontSize: 16, fontWeight: '800' },

  checkoutBtn: {
    backgroundColor: '#FF7A3D',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 14,
  },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: '800' },
});
