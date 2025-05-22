import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder, Dimensions } from 'react-native';


export default function Drop() {

	const { width, height } = Dimensions.get('window');
  const pan = useRef(new Animated.ValueXY()).current;
  const [dropped, setDropped] = useState(false);
  const dropZoneY = height * 0.6;



  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.moveY > dropZoneY) {
          setDropped(true);
        }
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.card, { transform: pan.getTranslateTransform() }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.cardText}>**** **** **** 4242</Text>
        <Text style={styles.balance}>$1,000.00</Text>
      </Animated.View>

      <View style={styles.dropZone}>
        <Text style={styles.dropText}>
          {dropped ? 'Transferred!' : 'Drop Here to Transfer'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 50,
  },
  card: {
    width: 260,
    height: 120,
    backgroundColor: '#1e3a8a',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  dropZone: {
    height: 150,
    width: 220,
    backgroundColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999',
    borderWidth: 2,
  },
  dropText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
