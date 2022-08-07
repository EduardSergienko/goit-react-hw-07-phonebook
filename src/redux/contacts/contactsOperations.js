import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, addItems, deleteItems } from 'apiServices/apiServices';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await getItems();
    return data;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    const { data } = await addItems(contact);

    return data;
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async contact => {
    const { data } = await deleteItems(contact);
    console.log(data);
    return data;
  }
);
