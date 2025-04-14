import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const BuyAirtimes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Airtime Top-Up</Text>

      <View style={styles.scrollWrapper}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Repeatable form content for scroll testing */}
          {[...Array(20)].map((_, index) => (
            <View key={index} style={styles.airtimeForm}>
              <Text style={styles.formTitle}>Recharge Form {index + 1}</Text>

              <TextInput
                style={styles.input}
                placeholder="Phone number"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="₦100 to ₦5,000"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="6-digit PIN"
                keyboardType="numeric"
              />

              <TouchableOpacity style={styles.buyBox}>
                <Text style={styles.buyText}>Recharge Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollWrapper: {
    height: 500, // Custom height for scrollable area
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollContent: {
    padding: 20,
  },
  airtimeForm: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  buyBox: {
    backgroundColor: '#f5b857',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BuyAirtimes;
