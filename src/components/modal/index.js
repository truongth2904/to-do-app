import React, {useCallback, useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-get-random-values';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {
  listToDoEdit,
  listToDoHandle,
  listToDoAdd,
} from '../../redux/action/listToDo.action';

const ViewModal = ({visible, onOnPressClose}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todo, setTodo] = useState(null);
  const id = useSelector(state => state.modalReducer.id);
  const toDos = useSelector(state => state.listReducer.listToDo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!toDos) {
      const todo = toDos.find(t => t.key === id);
      setTodo(todo);
      setTitle(todo?.title);
      setDescription(todo?.description);
    }
  }, [id, toDos]);

  const onPressSave = useCallback(() => {
    if (!todo) {
      if (!title || !description) {
      } else {
        dispatch(
          listToDoAdd({title, description, key: uuidv4(), isCheck: false}),
        );
        onOnPressClose();
        setTitle('');
        setDescription('');
      }
    } else {
      dispatch(listToDoEdit({...todo, title, description}));
      onOnPressClose();
      setTitle('');
      setDescription('');
    }
  }, [title, description, id]);

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.view}>
        <View style={styles.viewContent}>
          <TouchableOpacity style={styles.buttonClose} onPress={onOnPressClose}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text style={styles.titleModal}>
            {!todo ? 'Thêm mới' : 'Chỉnh sửa'}
          </Text>
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.textInput}
            placeholder="Tiêu đề"
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
            numberOfLines={5}
            style={styles.textInput}
            placeholder="Nội dung"
            placeholderTextColor={'grey'}
          />
          <View style={styles.viewButton}>
            <TouchableOpacity
              onPress={onPressSave}
              style={[styles.button, styles.backgroundColorRed]}>
              <Text style={styles.textButton}> {!todo ? 'Thêm' : 'Lưu'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOnPressClose} style={styles.button}>
              <Text style={styles.textButton}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ViewModal;

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  titleModal: {
    textAlign: 'center',
    color: 'black',
    paddingTop: 10,
  },
  viewContent: {
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    borderRadius: 10,
    color: 'black',
    paddingLeft: 5,
  },
  viewButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    paddingHorizontal: 20,
    margin: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    padding: 10,
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    zIndex: 10,
    borderTopRightRadius: 15,
  },
  backgroundColorRed: {
    backgroundColor: 'green',
  },
  textButton: {
    color: 'white',
    padding: 5,
  },
});
