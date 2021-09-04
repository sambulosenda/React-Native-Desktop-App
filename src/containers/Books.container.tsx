// src/containers/Books.container
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStore} from 'Store';
import tw from 'tailwind-rn'

interface IProps {}

export const Books = observer((props: IProps) => {
  let root = useStore();
  let [title, setTitle] = useState('');

  useEffect(() => {
    root.ui.fetchBooks();
  }, []);

  return (
    <View style={tw('p-3')}>
      {root.ui.uppercasedBooks.map((book) => (
        <View key={book.createdAt} style={tw('p-1')}>
          <Text>{book.title}</Text>
        </View>
      ))}

      <TextInput 
      value={title} 
      onChangeText={setTitle}
       style={tw('bg-white rounded p-2')}
       />

     <TouchableOpacity onPress={() => root.ui.addBook(title)}
       style={tw('bg-blue-500 text-white items-center p-3 rounded mt-2')} >
     
          <Text  style={tw('text-white')}>Add Button</Text>
     </TouchableOpacity>


    </View>
  );
});