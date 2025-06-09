import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = () => {
	const message= "hello there, how is it";
	const isSent = true;
  return (<>
    <View style={[styles.messageContainer, isSent ? styles.sent : styles.received]}>
      <View style={[styles.bubble, isSent ? styles.sentBubble : styles.receivedBubble]}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  </>);
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 50,
  },
  sent: {
    justifyContent: 'flex-end',
  },
  received: {
    justifyContent: 'flex-start',
  },
  bubble: {
    maxWidth: '80%',
    padding: 10,
    to:200,
    position:"absolute",
    borderRadius: 12,
  },
  sentBubble: {
    backgroundColor: '#dcf8c6',
    borderTopRightRadius: 0,
    top:200,
    right:30

  },
  receivedBubble: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    top:200,
    right:30
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ChatBubble;
