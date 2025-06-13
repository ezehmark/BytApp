import React,{useState}from "react";

import { StyleSheet, Text, View,Dimensions,Image,                             TouchableOpacity } from 'react-native';
import {useNavigation} from "@react-navigation/native";





export default function BottomTab({dark}){
const[selected,setSelected]=useState(0);

const navigation = useNavigation();

const tabs=[{name:"Reports",
	nav:"home",icon:dark?"https://i.postimg.cc/26q14R3p/file-00000000a48c62469dd187028c4749c8-1.png":"https://i.postimg.cc/Th8Jrk1K/file-00000000ed5861f4a92ddd6bd5b30043-1.png"},                                      {name:"Admin",nav:"bubble",icon:dark?"https://i.postimg.cc/fy0y365H/file-00000000c85c61f4a5f9b06dcd7c95b2.png":"https://i.postimg.cc/LXvF8zwZ/file-000000000c3061f7a2cea392f725922c-1.png"}];	

return(
<View style={[styles.bottom,{backgroundColor:dark?"blue":"white"}]}>                                          {tabs.map((item,index)=>{ 
	const isTab = selected === index;
	return(                                                     
	       <TouchableOpacity 
	       key={index}
	       onPress={()=>{setSelected(index);navigation.navigate(item.nav)}}
	       style={[styles.tab,{backgroundColor:isTab&&"rgba(0,240,212,169,0.7)"}]}>                                
	       <View style={{                                                                  justifyContent:"space-between",
	       paddingBottom:4,flexDirection:"column",                                                                      
	gap:2,backgroundColor:"transparent",alignItems:"center"}}>            <Image source={{uri:item.icon}}                                       style={{height:40,opacity:isTab?0.7:1,width:40}}/>                                        <Text style={[styles.tabText,{color: isTab?"#00d4d4":"white"}]}>{item.name}</Text>                      
	</View>                                                               </TouchableOpacity>                                                   
	      )})}                                                                                                                                        </View>)}

const sWidth = Dimensions.get("window").width;                        const styles = StyleSheet.create({                                            bottom:{justifyContent:"space-between",elevation:4,

									flexDirection:"row",alignItems:"center",position:"absolute",
bottom:0,height:60,width:"100%"},                                          
tab:{width:sWidth/2,borderRightWidth:0,justifyContent:"center"
,backgroundColor:"transparent",height:"100%",alignItems:"center"},    tabText:{color:"#213547",marginTop:-6,fontWeight:"bold",fontSize:15,
backgroundColor:"transparent"}                                                                                                                                                                                                                                                            

})
