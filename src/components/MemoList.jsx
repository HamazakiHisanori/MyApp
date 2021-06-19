import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>12月24日 0:00</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </View>

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
});
