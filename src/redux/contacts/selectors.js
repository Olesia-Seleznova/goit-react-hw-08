import { createSelector } from "@reduxjs/toolkit";
import { selectFilteredContacts } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectIsError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filter) => {
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.includes(filter)
    );
  }
);

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilteredContacts],
//   (contacts, filter) => {
//     // Перевірка чи `contacts` є масивом перед використанням методу `filter()`
//     if (!Array.isArray(contacts)) {
//       return [];
//     }

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
