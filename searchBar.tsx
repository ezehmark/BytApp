import React from 'react';
import { View, TextInput, Pressable,Text,Image, StyleSheet } from 'react-native';
import useStore from "./zustand";


const SearchBar= ({
  profileImage,
  placeholder = 'Search...',
  onChangeText,
  value,
  height,
  handleClose,
  picSize
}) => {
	const dark = useStore(s=>s.dark);
  return (
    <View style={styles.wrapper}>
      <View style={[styles.searchBar,{backgroundColor:"#d3e3ee",
	      height:height ?? 50}]}>
        <Image source={{ uri: profileImage }} style={[styles.profileImage,{height:picSize??40,width:picSize??40,borderRadius:picSize/2??20}]} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={onChangeText}
          value={value}
        />
	<Pressable onPress={handleClose}><Text style={{fontSize:10,padding:4,backgroundColor:"#d3e3ee",borderRadius:4,elevation:4,marginRight:100}}>❌</Text></Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 50,
    width: 160, // 40 (icon) + 100 (input) + padding
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 5,
    backgroundColor:"black",
  },
  input: {
    width: 100,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
