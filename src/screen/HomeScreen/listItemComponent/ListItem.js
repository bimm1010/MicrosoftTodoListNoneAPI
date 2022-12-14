import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getInput, getIndex } from '../../../reducer/reducer/actions';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { delItem } from '../../../reducer/reducer/actions';

const ListItem = ({ item, index, navigation, state, func }) => {
  console.log(item);
  const handleUpdate = () => {
    func(getInput(state[index]));
    func(getIndex(index));
    navigation.navigate('Update');
  };
  const rightSwipe = () => {
    return (
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => func(delItem(index))}>
        <Text style={styles.textColor}>Delete</Text>
      </TouchableOpacity>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.Container}>
          <TouchableOpacity onPress={handleUpdate}>
            <Text>{item}</Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 35,
    marginTop: 20,
  },
  textColor: {
    color: 'red',
  },
  textContainer: {
    textAlignVertical: 'center',
    paddingTop: 20,
  },
});

export default ListItem;
