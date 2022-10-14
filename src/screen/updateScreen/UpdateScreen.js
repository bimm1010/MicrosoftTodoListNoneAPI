import React, {useContext, useEffect} from 'react';
import Context from '../../reducer/context/Context';
import {TextInput, View, StyleSheet, Keyboard} from 'react-native';
import FooterUpdateScreen from './FooterUpdateScreen';
import {getInput, updateInput} from '../../reducer/reducer/actions';

const UpdateScreen = () => {
  const [state, dispatch] = useContext(Context);
  const {TextInputField, indexItem} = state;

  useEffect(() => {
    const updateTitle = Keyboard.addListener('keyboardDidHide', () => {
      dispatch(updateInput(TextInputField, indexItem));

      return () => {
        updateTitle.remove();
      };
    });
  }, [TextInputField, dispatch, indexItem]);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <View style={styles.Container}>
        <TextInput
          value={TextInputField}
          placeholder={'enter update title'}
          style={styles.styleInput}
          onChangeText={text => dispatch(getInput(text))}
        />
      </View>

      <FooterUpdateScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  styleInput: {
    fontSize: 35,
  },
});

export default UpdateScreen;
