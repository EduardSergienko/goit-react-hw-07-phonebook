import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.items.push(action.payload);
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },

  //   changeFilter: (state, action) => {
  //     state.filter = action.payload;
  //   },
  // },
});
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
