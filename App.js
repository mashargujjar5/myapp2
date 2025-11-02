// import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

// export default function App() {
//   const items = [
//     {
//       id: 1,
//       name: "Crispy Chicken San",
//       description: "2x tuna sashimi, 3x vegetables, 1x noodle",
//       price: "$29.50",
//       image: require('./assets/adaptive-icon.png'), // Replace with your image
//     },
//     {
//       id: 2,
//       name: "Prawn & Chicken Roll",
//       description: "2x tuna sashimi, 3x vegetables, 1x noodle",
//       price: "$9.50",
//       image: require('./assets/adaptive-icon.png'), // Replace with your image
//     },
//     {
//       id: 3,
//       name: "Braised Fish Head",
//       description: "2x tuna sashimi, 3x vegetables, 1x noodle",
//       price: "$15.00",
//       image: require('./assets/adaptive-icon.png'), // Replace with your image
//     },
//     {
//       id: 4,
//       name: "Salad Fritters",
//       description: "2x tuna sashimi, 3x vegetables, 1x noodle",
//       price: "$4.90",
//       image: require('./assets/adaptive-icon.png'), // Replace with your image
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Order</Text>
//         <Text style={styles.closeText}>Close</Text>
//       </View>

//       <View style={styles.summary}>
//         <View style={styles.summaryRow}>
//           <Text style={styles.summaryLabel}>Subtotal</Text>
//           <Text style={styles.summaryValue}>$49.50</Text>
//         </View>
//         <View style={styles.summaryRow}>
//           <Text style={styles.summaryLabel}>Tax & Fees</Text>
//           <Text style={styles.summaryValue}>$2.75</Text>
//         </View>
//         <View style={styles.summaryRow}>
//           <Text style={styles.summaryLabel}>Delivery</Text>
//           <Text style={styles.summaryValue}>Free</Text>
//         </View>
//         <View style={[styles.summaryRow, styles.totalRow]}>
//           <Text style={styles.totalLabel}>Total</Text>
//           <Text style={styles.totalValue}>$52.25</Text>
//         </View>
//       </View>

//       <ScrollView style={styles.itemsContainer}>
//         {items.map((item) => (
//           <View key={item.id} style={styles.item}>
//             <Image source={item.image} style={styles.itemImage} />
//             <View style={styles.itemInfo}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemDescription}>{item.description}</Text>
//             </View>
//             <Text style={styles.itemPrice}>{item.price}</Text>
//           </View>
//         ))}
//       </ScrollView>

//       <TouchableOpacity style={styles.checkoutButton}>
//         <Text style={styles.checkoutText}>Checkout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 50,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   closeText: {
//     fontSize: 18,
//     color: '#ff5a5f',
//   },
//   summary: {
//     backgroundColor: '#f9f9f9',
//     padding: 20,
//     marginHorizontal: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   summaryRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   summaryLabel: {
//     fontSize: 16,
//     color: '#555',
//   },
//   summaryValue: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   totalRow: {
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     paddingTop: 10,
//     marginTop: 10,
//   },
//   totalLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   totalValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   itemsContainer: {
//     flex: 1,
//     marginHorizontal: 20,
//   },
//   item: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//     backgroundColor: '#fefefe',
//     padding: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   itemImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     marginRight: 15,
//   },
//   itemInfo: {
//     flex: 1,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   itemDescription: {
//     fontSize: 12,
//     color: '#888',
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   checkoutButton: {
//     backgroundColor: '#ff5a5f',
//     margin: 20,
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   checkoutText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../myapp/component/OrderScreen';
import CheckoutScreen from '../myapp/component/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Order"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
