import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Animated, PanResponder, Dimensions } from 'react-native';

import {useAnimatedStyle,useSharedValue,withTiming} from "react-native-reanimated";

const { width, height } = Dimensions.get('window');
const dropZoneY = height * 0.6;
export default function Drop() {

  const pan = useRef(new Animated.ValueXY()).current;
  const [dropped, setDropped] = useState(false);
  const[cardColor,setCardColor]=useState("#1e3a8a");
  const [amount,setAmount]=useState("");



  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove:(e,gesture)=>{
const dy = gesture.dy <0? gesture.dy:0;
      pan.setValue({x:0,y:dy});

      setAmount(gesture.moveY);
      if(gesture.moveY>dropZoneY){
      setCardColor("green");}
      else{setCardColor("#1e3a8a")}},

      onPanResponderRelease: (_, gesture) => {
        if (gesture.moveY > dropZoneY) {
          setDropped(true);
	  Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
	  
        }
      },
    })
  ).current;

  const cardTop= useSharedValue(0);
  const cardMove = useAnimatedStyle(()=>{
  return{translateY:cardTop.value}});

  const moveCardUp = ()=>{

  cardTop.value=withTiming(-20,{duration:1500});
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.card, { zIndex:2,top:40,width:270,height:130,backgroundColor:cardColor,transform: pan.getTranslateTransform() },cardMove]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.cardText}>**** **** **** 4242</Text>
        <Text style={styles.balance}>${amount.toLocaleString("en-us")}</Text>
      </Animated.View>
<View style={{top:100,position:"absolute",width:"80%",height:150,borderTopRightRadius:20,borderTopLeftRadius:20,backgroundColor:"#ffe0b2",alignItems:"center",zIndex:0,justifyContent:"center"}}                 />

      <View style={{top:140,zIndex:3,elevation:10,shadowRadius:8,shadowColor:"black",position:"absolute",width:"80%",height:150,borderBottomRightRadius:10,borderBottomLeftRadius:10,backgroundColor:"#feb819",alignItems:"center",justifyContent:"center"}}>
      <Text style={{position:"absolute",color:"#d50204",fontSize:20,bottoim:"20%",rigiht:"20%",fontWeight:"bold"}}>BytWallet</Text>
      <TouchableOpacity onPress={()=>{moveCardUp()}}style={{alignItems:"center",padding:6,borderRadius:6,elevation:4,justifyContent:"center",backgroundColor:"#ccc",position:"absolute",bottom:"10%",right:"10%"}}><Text style={{fontSize:12,fontWeight:"bold"}}>Use card</Text></TouchableOpacity>
      </View>

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
    paddingVertical: 0,
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
    top:20,
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
    height: 300,
    width: 220,
    backgroundColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#999',
    borderWidth: 2,
    bottom:20
  },
  dropText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
