import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Item from '../../components/item';
import Modal from '../../components/modal';
import {
  listToDoDelete,
  listToDoDeleteAll,
  listToDoGet,
} from '../../redux/action/listToDo.action';
import {modalHandle} from '../../redux/action/modal.action';
import {listToDoSearch} from '../../redux/action/listToDo.action';
import {getListToDoSelector} from '../../redux/selector/listToDo.selector';
import {getVisibleSelector} from '../../redux/selector/modal.selector';

import styles from './styles';
import withLoading from '../../HOC/withLoading';
import {LIST_TYPE} from '../../redux/constant/listToDo.constant';

const Home = () => {
  const dispatch = useDispatch();
  const currentState = useSelector(getVisibleSelector);
  const currentStateListToDo = useSelector(getListToDoSelector);
  const onOnPressOpen = useCallback(() => {
    dispatch(modalHandle({visible: true}));
  }, []);
  const onOnPressClose = useCallback(() => {
    dispatch(modalHandle({visible: false}));
  }, []);

  const deleteAllItem = useCallback(() => {
    dispatch(listToDoDeleteAll());
  }, []);

  const onPressDeleteAll = useCallback(() => {
    Alert.alert(
      '',
      'Bạn muốn xóa tất cả ?',
      [
        {
          text: 'Cancel',
        },
        {text: 'OK', onPress: deleteAllItem},
      ],
      {cancelable: false},
    );
  }, []);

  const renderItem = ({item}) => {
    const editItem = () => dispatch(modalHandle({visible: true, id: item.key}));
    const deleteItem = () => dispatch(listToDoDelete(item.key));
    const onLongPressItem = () =>
      Alert.alert(
        '',
        'Bạn muốn xóa mục này ?',
        [
          {
            text: 'Cancel',
          },
          {text: 'OK', onPress: deleteItem},
        ],
        {cancelable: false},
      );
    return (
      <Item onLongPress={onLongPressItem} onPressEdit={editItem} item={item} />
    );
  };
  const renderEmpty = () => (
    <Text style={styles.textEmpty}>Không có dữ liệu</Text>
  );
  useEffect(() => {
    dispatch(listToDoGet());
  }, [dispatch]);

  const [textSearch, setTextSearch] = useState('');
  const onChangeTextSearch = useCallback(
    text => {
      setTextSearch(text);
      dispatch(listToDoSearch(text));
    },
    [textSearch],
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#99e868'}/>
      <Text style={styles.textTitle}>TO DO LIST</Text>

      <View style={styles.view}>
        <TextInput
          value={textSearch}
          onChangeText={onChangeTextSearch}
          placeholder="Tìm kiếm"
          placeholderTextColor={'grey'}
          style={styles.textInput}
        />
        <Text style={styles.textContent}>Nhấn giữ để xóa</Text>
        <FlatList
          ListEmptyComponent={renderEmpty}
          keyExtractor={item => item.title + Date.now().toString()}
          renderItem={renderItem}
          data={currentStateListToDo}
        />
      </View>
      <TouchableOpacity style={styles.buttonAdd} onPress={onOnPressOpen}>
        <Text style={styles.textAdd}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewButtonDeleteAll}
        onPress={onPressDeleteAll}>
        <Text style={styles.textDeleteAll}>Xóa hết</Text>
      </TouchableOpacity>
      <Modal onOnPressClose={onOnPressClose} visible={currentState} />
    </View>
  );
};

export default withLoading(Home, [
  LIST_TYPE.GET_HANDLE,
  LIST_TYPE.DELETE_HANDLE,
  LIST_TYPE.ADD_HANDLE,
  LIST_TYPE.DELETE_ALL_HANDLE,
]);
