import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('delete?'); }}
          style={styles.memoDelete}
        >
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('delete?'); }}
          style={styles.memoDelete}
        >
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('delete?'); }}
          style={styles.memoDelete}
        >
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 16,
    lineHeight: 16,
    color: 'gray',
  },
  memoDelete: {
    padding: 8,
  },
});
