import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, instanceOf, arrayOf,
} from 'prop-types';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{String(item.updatedAt)}</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('delete?'); }}
          style={styles.memoDelete}
        >
          <MaterialCommunityIcons name="close-circle-outline" size={24} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

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
  container: {
    flex: 1,
  },
});
