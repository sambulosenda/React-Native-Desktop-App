// src/containers/Books.container
import {observer} from 'mobx-react-lite';
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStore} from 'Store';
import {tw} from 'Tailwind';

interface IProps {}

export const Books = observer((props: IProps) => {
  let root = useStore();
  let [title, setTitle] = useState('');

  useEffect(() => {
    root.ui.fetchBooks();
  }, []);

  return (
    <View style={tw('p-3')}>
      <Text style={tw('font-bold')}>My favoutate books</Text>
      {root.ui.uppercasedBooks.map((book) => (
        <View key={book.createdAt} style={tw('py-1')}>
          <Text style={tw('text-sm')}>{book.title}</Text>
        </View>
      ))}

      <Text style={tw('font-bold mt-6 mb-2')}>New book</Text>

      <View style={tw('flex-row')}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Book Title"
          style={tw(' flex-1 bg-white rounded p-1 ')}
        />

        <TouchableOpacity
          onPress={() => root.ui.addBook(title)}
          style={tw('bg-tangerine text-white justify-center p-3 ')}>
          <Text style={tw('text-white')}>Add Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});
