import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';
import {listToDoEdit} from '../../redux/action/listToDo.action';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Item = ({item, onPressEdit, onLongPress}) => {
  const dispatch = useDispatch();

  const onValueChangeCheck = () => {
    dispatch(listToDoEdit({...item, isCheck: !item.isCheck}));
  };

  return (
    <TouchableOpacity
      onPress={onValueChangeCheck}
      onLongPress={onLongPress}
      style={[styles.view, item.isCheck ? styles.viewItemDisable : null]}>
      <CheckBox value={item.isCheck} onValueChange={onValueChangeCheck} />

      <View style={styles.viewTextIcon}>
        <View style={styles.viewContent}>
          <Text style={[styles.textTitle, item.isCheck ? styles.textLine : {}]}>
            {item.title}
          </Text>
          <Text style={[styles.textTitle, item.isCheck ? styles.textLine : {}]}>
            {item.description}
          </Text>
        </View>
        <TouchableOpacity
          hitSlop={10}
          onPress={onPressEdit}
          style={styles.viewIcon}>
          <FontAwesome color={'red'} name="edit" size={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(145,110,1,0.5)',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  viewContent: {
    marginLeft: 20,
  },
  textTitle: {
    color: 'black',
  },
  textLine: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  viewItemDisable: {
    backgroundColor: 'grey',
  },
  viewTextIcon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  viewIcon: {
    backgroundColor: 'green',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
