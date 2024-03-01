import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  addContacts,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';
import persistReducer from 'redux-persist/es/persistReducer';

const fetchContactsPending = state => {
  state.error = null;
  state.isLoading = true;
};

const fetchContactsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], favoriteItems: [], isLoading: false, error: null },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, fetchContactsPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, fetchContactsRejected)
      .addCase(addContacts.pending, fetchContactsPending)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContacts.rejected, fetchContactsRejected)
      .addCase(deleteContact.pending, fetchContactsPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, fetchContactsRejected)
      .addCase(updateContact.pending, fetchContactsPending)
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item => {
          if (item.id != action.payload.id) {
            return item;
          } else {
            return {
              ...item,
              ...action.payload,
            };
          }
        });
      })
      .addCase(updateContact.rejected, fetchContactsRejected);
  },
});

const contactsPersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteItems'],
};

export const { addFavorite } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);
