import { createSelector } from '@reduxjs/toolkit';
import { search } from '../../helpers/searchFunction';
import { selectQuery } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    return search(contacts, query);
  }
);
