import { createSelector } from '@reduxjs/toolkit';
import { selectQuery } from '../filters/selectors';
import { search } from '../../helpers/searchFunction';

export const selectContacts = state => state.contacts.items;
export const selectFvoriteContacts = state => state.contacts.favoriteItems;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    return search(contacts, query);
  }
);

export const selectfiltredFavoriteContacts = createSelector(
  [selectFvoriteContacts, selectQuery],
  (contacts, query) => {
    return search(contacts, query);
  }
);
