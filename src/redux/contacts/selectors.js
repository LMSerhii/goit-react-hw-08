import { createSelector } from '@reduxjs/toolkit';
import { selectQuery } from '../filters/selectors';
import { searchFuse } from '../../helpers/searchFuse';

export const selectContacts = state => state.contacts.items;
export const selectFvoriteContacts = state => state.contacts.favoriteItems;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectQuery],
  (contacts, query) => {
    const results = searchFuse(contacts, query);
    return query ? results.map(result => result.item) : contacts;
  }
);

export const selectfiltredFavoriteContacts = createSelector(
  [selectFvoriteContacts, selectQuery],
  (contacts, query) => {
    const results = searchFuse(contacts, query);
    return query ? results.map(result => result.item) : contacts;
  }
);
